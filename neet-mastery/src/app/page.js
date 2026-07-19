'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProgressBar from '@/components/ui/ProgressBar';

/* ── Mock user progress data ── */
const mockStats = {
  totalQuestions: 247,
  accuracy: 78,
  streak: 5,
  pyqCompleted: 82,
};

const recentTopics = [
  { id: 'bio-ch5-t1-s1-m3', name: 'Columnar Epithelium', subject: 'biology', icon: '🧬' },
  { id: 'phy-ch3-t3-s1', name: 'First Equation of Motion', subject: 'physics', icon: '⚛️' },
  { id: 'chem-ch1-t3-s1', name: 'Molar Mass & Moles', subject: 'chemistry', icon: '⚗️' },
  { id: 'bio-ch5-t1-s1-m1', name: 'Squamous Epithelium', subject: 'biology', icon: '🧬' },
  { id: 'phy-ch4-t2-s2', name: 'F = ma Problems', subject: 'physics', icon: '⚛️' },
];

const subjects = [
  {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    cardClass: 'subject-card--biology',
    chapters: 38,
    questions: 2400,
    progress: 32,
    description: 'Botany & Zoology',
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    cardClass: 'subject-card--physics',
    chapters: 28,
    questions: 1800,
    progress: 18,
    description: 'Mechanics to Modern Physics',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '⚗️',
    cardClass: 'subject-card--chemistry',
    chapters: 30,
    questions: 2000,
    progress: 25,
    description: 'Physical, Organic & Inorganic',
  },
];

export default function HomePage() {
  const [hoveredSubject, setHoveredSubject] = useState(null);

  return (
    <div className="container">
      {/* ── Hero Section ── */}
      <section className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <span className="streak-badge" id="streak-badge">
            🔥 {mockStats.streak} Day Streak
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 900, marginBottom: 'var(--space-md)' }}>
          Master NCERT,{' '}
          <span className="text-gradient">One Topic at a Time</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '640px',
          margin: '0 auto var(--space-xl)',
          lineHeight: 1.7,
        }}>
          Practice only what you&apos;ve studied. Build real confidence for NEET — no overwhelm, no fear.
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/subject/biology" className="btn btn--primary btn--lg" id="start-practicing-btn">
            🚀 Start Practicing
          </Link>
          <Link href="/dashboard" className="btn btn--outline btn--lg" id="view-progress-btn">
            📊 View Progress
          </Link>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="stats-row animate-fade-in-up stagger-1" id="daily-stats">
        <div className="stat-card">
          <div className="stat-card__icon">📝</div>
          <div className="stat-card__value">{mockStats.totalQuestions}</div>
          <div className="stat-card__label">Questions Solved</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">🎯</div>
          <div className="stat-card__value">{mockStats.accuracy}%</div>
          <div className="stat-card__label">Accuracy</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">🔥</div>
          <div className="stat-card__value">{mockStats.streak}</div>
          <div className="stat-card__label">Day Streak</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">📋</div>
          <div className="stat-card__value">{mockStats.pyqCompleted}</div>
          <div className="stat-card__label">PYQs Completed</div>
        </div>
      </section>

      {/* ── Subject Cards ── */}
      <section style={{ marginTop: 'var(--space-3xl)' }}>
        <div className="section-heading">
          <h2 className="section-heading__title" id="subjects-heading">Choose Your Subject</h2>
        </div>

        <div className="subject-grid">
          {subjects.map((subject, idx) => (
            <Link
              key={subject.id}
              href={`/subject/${subject.id}`}
              id={`subject-card-${subject.id}`}
            >
              <div
                className={`subject-card ${subject.cardClass} animate-fade-in-up stagger-${idx + 2}`}
                onMouseEnter={() => setHoveredSubject(subject.id)}
                onMouseLeave={() => setHoveredSubject(null)}
              >
                <div>
                  <div className="subject-card__icon">{subject.icon}</div>
                  <h3 className="subject-card__title">{subject.name}</h3>
                  <p className="subject-card__meta">{subject.description}</p>
                  <p className="subject-card__meta">{subject.chapters} Chapters · {subject.questions}+ Questions</p>
                </div>
                <div className="subject-card__progress">
                  <div
                    className="subject-card__progress-fill"
                    style={{ width: hoveredSubject === subject.id ? `${subject.progress}%` : `${subject.progress}%` }}
                  />
                </div>
                <p className="subject-card__meta" style={{ marginTop: '6px', fontSize: '0.8rem' }}>
                  {subject.progress}% Mastered
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Daily Progress ── */}
      <section style={{ marginTop: 'var(--space-3xl)' }}>
        <div className="section-heading">
          <h2 className="section-heading__title" id="daily-progress-heading">Today&apos;s Progress</h2>
          <span className="section-heading__action">View Full Report →</span>
        </div>

        <div className="glass-card animate-fade-in-up" id="daily-progress-card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-xl)' }}>
            <div>
              <ProgressBar value={15} max={30} label="Questions Today" variant="default" />
            </div>
            <div>
              <ProgressBar value={85} max={100} label="Today's Accuracy" variant="success" />
            </div>
            <div>
              <ProgressBar value={3} max={5} label="Topics Covered" variant="default" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Recently Practiced Topics ── */}
      <section style={{ marginTop: 'var(--space-3xl)' }}>
        <div className="section-heading">
          <h2 className="section-heading__title" id="recent-topics-heading">Recently Practiced</h2>
          <span className="section-heading__action">See All →</span>
        </div>

        <div className="recent-topics" id="recent-topics-list">
          {recentTopics.map((topic) => (
            <Link
              key={topic.id}
              href={`/practice?topics=${topic.id}`}
              className="recent-topic-chip"
            >
              <span>{topic.icon}</span>
              <span>{topic.name}</span>
              <span style={{ color: 'var(--primary)', fontSize: '0.75rem' }}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Continue Learning CTA ── */}
      <section style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
        <div className="glass-card gradient-border animate-fade-in-up" style={{ maxWidth: '600px', margin: '0 auto', padding: 'var(--space-2xl)', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>📖</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>
            Continue Where You Left Off
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', fontSize: '0.95rem' }}>
            You were practicing <strong>Columnar Epithelium</strong> in Biology.
            <br />Keep going to maintain your streak!
          </p>
          <Link href="/practice?topics=bio-ch5-t1-s1-m3" className="btn btn--primary" id="continue-learning-btn">
            ▶ Continue Learning
          </Link>
        </div>
      </section>

      {/* ── Confidence Learning Highlight ── */}
      <section style={{ marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-2xl)' }}>
        <div className="section-heading">
          <h2 className="section-heading__title">🛡️ Confidence Learning Mode</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'var(--space-lg)',
        }}>
          {[
            {
              icon: '✅',
              title: 'Study Only What You Know',
              desc: 'Select only the topics you\'ve studied. Questions will NEVER come from unselected topics.',
            },
            {
              icon: '🧩',
              title: 'Mix & Match Topics',
              desc: 'Combine multiple micro-topics into one custom test. You control the difficulty and scope.',
            },
            {
              icon: '📈',
              title: 'Track Micro-Topic Mastery',
              desc: 'See your mastery down to the most granular level. Know exactly where you\'re strong and weak.',
            },
          ].map((feature, idx) => (
            <div key={idx} className={`glass-card animate-fade-in-up stagger-${idx + 1}`}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>{feature.icon}</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>
                {feature.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
