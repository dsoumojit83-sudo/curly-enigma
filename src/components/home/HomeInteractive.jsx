'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getOverallStats, getStreak, getRecentTopics, getSession, getTodayStats, getMode } from '@/lib/storage';

export default function HomeInteractive({ allSubjects, features }) {
  const [stats, setStats] = useState({ totalQuestions: 0, accuracy: 0, streak: 0, topicsMastered: 0 });
  const [todayStats, setTodayStats] = useState({ questions: 0, correct: 0, wrong: 0 });
  const [recentTopics, setRecentTopics] = useState([]);
  const [session, setSessionData] = useState(null);
  const [mode, setModeState] = useState('neet');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const sync = () => {
      setStats(getOverallStats());
      setTodayStats(getTodayStats());
      setRecentTopics(getRecentTopics());
      setSessionData(getSession());
      setModeState(getMode());
    };
    
    setMounted(true);
    sync();

    const handleStorage = (e) => {
      if (e.key && e.key.startsWith('neetmastery_')) {
        sync();
      }
    };
    
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const subjectIcons = { biology: '🧬', physics: '⚛️', chemistry: '⚗️', mathematics: '📐' };

  return (
    <>
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
          {mounted && (
            <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, background: 'var(--primary-light)', padding: '2px 8px', borderRadius: '12px' }}>
              {mode.toUpperCase()} Mode
            </span>
          )}
        </div>
        <div className="subject-grid">
          {allSubjects.filter(sub => mounted ? (sub.mode === 'both' || sub.mode === mode) : (sub.mode === 'neet' || sub.mode === 'both')).map((subject, idx) => (
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
    </>
  );
}
