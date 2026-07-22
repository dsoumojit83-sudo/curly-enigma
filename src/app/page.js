'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProgressBar from '@/components/ui/ProgressBar';
import { getOverallStats, getStreak, getRecentTopics, getSession, getTodayStats } from '@/lib/storage';
import { useData } from '@/context/DataContext';

import { getMode } from '@/lib/storage';

const allSubjects = [
  { id: 'biology', name: 'Biology', icon: '🧬', color: 'var(--biology)', chapters: 35, desc: 'Class 11 + 12 NCERT', href: '/subject/biology', mode: 'neet' },
  { id: 'physics', name: 'Physics', icon: '⚛️', color: 'var(--physics)', chapters: 29, desc: 'Class 11 + 12', href: '/subject/physics', mode: 'both' },
  { id: 'chemistry', name: 'Chemistry', icon: '⚗️', color: 'var(--chemistry)', chapters: 28, desc: 'Class 11 + 12', href: '/subject/chemistry', mode: 'both' },
  { id: 'mathematics', name: 'Mathematics', icon: '📐', color: 'var(--physics)', chapters: 30, desc: 'Class 11 + 12', href: '/subject/mathematics', mode: 'jee' },
];

const features = [
  { icon: '🃏', name: 'Flashcards', desc: 'Quick revision with flip cards', href: '/flashcards' },
  { icon: '📋', name: 'Mock Test', desc: 'Full-length timed practice', href: '/mock-test' },
  { icon: '📅', name: 'Revision', desc: 'Spaced repetition scheduler', href: '/revision' },
  { icon: '🤖', name: 'AI Tutor', desc: 'Ask doubts, get explanations', href: '/ai-tutor' },
  { icon: '🔖', name: 'Bookmarks', desc: 'Saved questions for later', href: '/bookmarks' },
  { icon: '🏆', name: 'Leaderboard', desc: 'See how you rank', href: '/leaderboard' },
];

export default function HomePage() {
  const { findTopicById, loading } = useData();
  const [stats, setStats] = useState({ totalQuestions: 0, accuracy: 0, streak: 0, topicsMastered: 0 });
  const [todayStats, setTodayStats] = useState({ questions: 0, correct: 0, wrong: 0 });
  const [recentTopics, setRecentTopics] = useState([]);
  const [session, setSessionData] = useState(null);
  const [mode, setModeState] = useState('neet');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStats(getOverallStats());
    setTodayStats(getTodayStats());
    setRecentTopics(getRecentTopics());
    setSessionData(getSession());
    setModeState(getMode());
  }, []);

  const subjectIcons = { biology: '🧬', physics: '⚛️', chemistry: '⚗️', mathematics: '📐' };

  if (loading) return null; // Avoid hydration mismatch on dynamic topics

  return (
    <div className="container">
      {/* ── Hero ── */}
      <section className="hero animate-fade-in-up" id="hero-section">
        <div className="hero__badge">🎓 NEET 2025 Ready</div>
        <h1 className="hero__title">
          Master NCERT,<br />
          <span className="hero__title--gradient">One Topic at a Time</span>
        </h1>
        <p className="hero__subtitle">
          Practice only what you&apos;ve studied. Build confidence with topic-wise questions
          following the exact NCERT hierarchy.
        </p>
        <div className="hero__actions">
          <Link href="/subject/biology" className="btn btn--primary btn--lg" id="start-btn">
            🚀 Start Practicing
          </Link>
          <Link href="/dashboard" className="btn btn--outline btn--lg" id="dashboard-btn">
            📊 My Dashboard
          </Link>
        </div>
      </section>

      {/* ── Today's Progress ── */}
      {mounted && (
        <section className="animate-fade-in-up stagger-1">
          <div className="stats-row" id="today-stats">
            <div className="stat-card">
              <div className="stat-card__icon">🔥</div>
              <div className="stat-card__value">{stats.streak}</div>
              <div className="stat-card__label">Day Streak</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">📝</div>
              <div className="stat-card__value">{mounted ? todayStats.questions : 0}</div>
              <div className="stat-card__label">Today</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">🎯</div>
              <div className="stat-card__value">{stats.accuracy}%</div>
              <div className="stat-card__label">Accuracy</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">✅</div>
              <div className="stat-card__value">{stats.totalQuestions}</div>
              <div className="stat-card__label">Total Solved</div>
            </div>
          </div>
        </section>
      )}

      {/* ── Resume Session ── */}
      {mounted && session && (
        <section className="animate-fade-in-up stagger-2" style={{ marginTop: 'var(--space-lg)' }}>
          <div className="glass-card gradient-border" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '4px' }}>📖 Continue Where You Left Off</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {session.topicNames?.join(', ') || 'Your practice session'} — Question {session.currentIndex + 1}/{session.totalQuestions}
              </p>
            </div>
            <Link href={`/practice?resume=true`} className="btn btn--primary" id="resume-btn">
              Continue →
            </Link>
          </div>
        </section>
      )}

      {/* Subjects */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-md)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Explore Subjects</h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, background: 'var(--primary-light)', padding: '2px 8px', borderRadius: '12px' }}>
            {mode.toUpperCase()} Mode
          </span>
        </div>
        <div className="subject-grid">
          {allSubjects.filter(sub => sub.mode === 'both' || sub.mode === mode).map((subject, idx) => (
            <Link key={subject.id} href={subject.href} className={`subject-card animate-scale-in stagger-${idx + 1}`} style={{ '--subject-color': subject.color }}>
              <div className="subject-card__icon" style={{ background: `${subject.color}15` }}>
                <span style={{ fontSize: '2.5rem' }}>{subject.icon}</span>
              </div>
              <h3 className="subject-card__name">{subject.name}</h3>
              <p className="subject-card__desc">{subject.desc}</p>
              <div className="subject-card__meta">
                <span>{subject.chapters} Chapters</span>
                <span style={{ color: subject.color }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section style={{ marginTop: 'var(--space-xl)' }}>
        <h2 className="section-title animate-fade-in-up">🛠️ All Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-md)' }}>
          {features.map((feat, idx) => (
            <Link key={feat.name} href={feat.href} className={`glass-card animate-fade-in-up stagger-${idx + 1}`} style={{ cursor: 'pointer', textAlign: 'center', padding: 'var(--space-lg)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>{feat.icon}</div>
              <h4 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>{feat.name}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>{feat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Recently Practiced ── */}
      {mounted && recentTopics.length > 0 && (
        <section style={{ marginTop: 'var(--space-xl)' }}>
          <h2 className="section-title animate-fade-in-up">🕒 Recently Practiced</h2>
          <div style={{ display: 'flex', gap: 'var(--space-md)', overflowX: 'auto', paddingBottom: 'var(--space-sm)' }}>
            {recentTopics.slice(0, 6).map((topic) => (
              <Link
                key={topic.id}
                href={`/practice?topics=${topic.id}`}
                className="glass-card"
                style={{ minWidth: '200px', cursor: 'pointer', flexShrink: 0 }}
              >
                <span style={{ fontSize: '1.5rem' }}>{subjectIcons[topic.subject] || '📖'}</span>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '8px' }}>{topic.name}</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                  {new Date(topic.time).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-2xl)' }}>
        <div className="glass-card gradient-border animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>🎯</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>
            Confidence Learning Mode
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto var(--space-lg)' }}>
            Select only the topics you&apos;ve studied. Get questions from just those concepts.
            Never feel overwhelmed — build confidence step by step.
          </p>
          <Link href="/subject/biology" className="btn btn--primary btn--lg" id="confidence-cta">
            Try It Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
