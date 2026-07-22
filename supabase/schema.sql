-- NEET Mastery Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Subjects & Chapters (Syllabus)
CREATE TABLE public.syllabus (
    id TEXT PRIMARY KEY,
    subject TEXT NOT NULL, -- biology, physics, chemistry, mathematics
    name TEXT NOT NULL,
    class INTEGER,
    parent_id TEXT REFERENCES public.syllabus(id),
    question_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster hierarchical queries
CREATE INDEX idx_syllabus_parent_id ON public.syllabus(parent_id);
CREATE INDEX idx_syllabus_subject ON public.syllabus(subject);

-- 2. Questions Bank
CREATE TABLE public.questions (
    id TEXT PRIMARY KEY,
    topic_id TEXT REFERENCES public.syllabus(id),
    type TEXT NOT NULL, -- mcq, assertion, match, numerical, multi-correct, statement
    difficulty TEXT, -- Easy, Medium, Hard
    is_pyq BOOLEAN DEFAULT false,
    year INTEGER,
    ncert_ref TEXT,
    question_text TEXT NOT NULL,
    options JSONB, -- For MCQ, multi-correct, statement
    match_columns JSONB, -- For Match the Following
    correct_answer JSONB NOT NULL, -- Index(es), numerical value, or string
    explanation JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_questions_topic_id ON public.questions(topic_id);
CREATE INDEX idx_questions_type ON public.questions(type);

-- 3. User Progress Tracking
CREATE TABLE public.user_progress (
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    topic_id TEXT REFERENCES public.syllabus(id) ON DELETE CASCADE,
    correct INTEGER DEFAULT 0,
    wrong INTEGER DEFAULT 0,
    total INTEGER DEFAULT 0,
    mastery INTEGER DEFAULT 0,
    last_practiced TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    PRIMARY KEY(user_id, topic_id)
);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_progress_updated_at
    BEFORE UPDATE ON public.user_progress
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE public.syllabus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Syllabus and Questions are readable by anyone
CREATE POLICY "Syllabus is viewable by everyone" ON public.syllabus FOR SELECT USING (true);
CREATE POLICY "Questions are viewable by everyone" ON public.questions FOR SELECT USING (true);

-- User progress is only accessible by the owner
CREATE POLICY "Users can view their own progress" ON public.user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own progress" ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own progress" ON public.user_progress FOR UPDATE USING (auth.uid() = user_id);

