'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProgressBar from '@/components/ui/ProgressBar';

/* ── Mock Dashboard Data ── */
const subjectMastery = [
  { name: 'Biology', icon: '🧬', mastery: 32, color: 'var(--biology)', questions: 145, accuracy: 81 },
  { name: 'Physics', icon: '⚛️', mastery: 18, color: 'var(--physics)', questions: 52, accuracy: 72 },
  { name: 'Chemistry', icon: '⚗️', mastery: 25, color: 'var(--chemistry)', questions: 50, accuracy: 78 },
];

const weakTopics = [
  { name: 'Dimensional Analysis', accuracy: 42, color: 'var(--danger)', subject: 'Physics' },
  { name: 'Kingdom Fungi', accuracy: 48, color: 'var(--danger)', subject: 'Biology' },
  { name: 'Hybridization', accuracy: 52, color: 'var(--warning)', subject: 'Chemistry' },
  { name: 'Laws of Friction', accuracy: 55, color: 'var(--warning)', subject: 'Physics' },
  { name: 'Viroids', accuracy: 58, color: 'var(--warning)', subject: 'Biology' },
];

const strongTopics = [
  { name: 'Squamous Epithelium', accuracy: 95, color: 'var(--success)', subject: 'Biology' },
  { name: 'Mole Concept', accuracy: 92, color: 'var(--success)', subject: 'Chemistry' },
  { name: 'Equations of Motion', accuracy: 88, color: 'var(--success)', subject: 'Physics' },
  { name: 'Columnar Epithelium', accuracy: 87, color: 'var(--success)', subject: 'Biology' },
];

const recentMistakes = [
  { question: 'Ciliated epithelium is found in...', topic: 'Ciliated Epithelium', yourAnswer: 'Bile duct', correct: 'Fallopian tubes' },
  { question: 'Applications of Dimensional Analysis include...', topic: 'Dimensional Analysis', yourAnswer: 'Finding molecular mass', correct: 'Checking correctness of equations' },
  { question: 'Basidiomycetes reproduce by...', topic: 'Basidiomycetes', yourAnswer: 'Conidia', correct: 'Basidiospores' },
];

// Generate mock heatmap data (28 days)
const heatmapData = Array.from({ length: 28 }, (_, i) => {
  const r = Math.random();
  if (r > 0.7) return 4;
  if (r > 0.45) return 3;
  if (r > 0.25) return 2;
  if (r > 0.1) return 1;
  return 0;
});

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="container">
      {/* ── Header ── */}
      <div className="animate-fade-in-up" style={{ marginBottom: 'var(--space-xl)' }}>
        <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>← Back to Home</Link>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, marginTop: 'var(--space-md)' }}>
          📊 Your Dashboard
        </h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Track your progress, identify weaknesses, and master every NCERT concept.
        </p>
      </div>

      {/* ── Quick Stats ── */}
      <div className="stats-row animate-fade-in-up stagger-1" id="dashboard-stats">
        <div className="stat-card">
          <div className="stat-card__icon">📝</div>
          <div className="stat-card__value">247</div>
          <div className="stat-card__label">Total Questions</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">🎯</div>
          <div className="stat-card__value">78%</div>
          <div className="stat-card__label">Overall Accuracy</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">🔥</div>
          <div className="stat-card__value">5</div>
          <div className="stat-card__label">Current Streak</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">📋</div>
          <div className="stat-card__value">82</div>
          <div className="stat-card__label">PYQs Done</div>
        </div>
      </div>

      {/* ── Main Dashboard Grid ── */}
      <div className="dashboard-grid" style={{ marginTop: 'var(--space-xl)' }}>
        {/* Subject Mastery */}
        <div className="dashboard-card animate-fade-in-up stagger-2" id="subject-mastery-card">
          <h3 className="dashboard-card__title">📈 Subject Mastery</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {subjectMastery.map((subject) => (
              <div key={subject.name}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {subject.icon} {subject.name}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {subject.questions} Q · {subject.accuracy}% Acc
                  </span>
                </div>
                <div className="progress-bar" style={{ height: '10px' }}>
                  <div
                    className="progress-bar__fill"
                    style={{
                      width: `${subject.mastery}%`,
                      background: `linear-gradient(90deg, ${subject.color}, ${subject.color}88)`,
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '4px', textAlign: 'right' }}>
                  {subject.mastery}% mastered
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Heatmap */}
        <div className="dashboard-card animate-fade-in-up stagger-3" id="heatmap-card">
          <h3 className="dashboard-card__title">🗓️ Study Heatmap (Last 4 Weeks)</h3>
          <div style={{ marginBottom: 'var(--space-md)' }}>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                <span key={d} style={{ flex: 1, textAlign: 'center' }}>{d}</span>
              ))}
            </div>
            <div className="heatmap">
              {heatmapData.map((level, idx) => (
                <div
                  key={idx}
                  className={`heatmap__cell ${level > 0 ? `heatmap__cell--level-${level}` : ''}`}
                  title={`${level === 0 ? 'No' : level * 8} questions practiced`}
                  style={{ borderRadius: '4px', minHeight: '28px' }}
                />
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
            Less
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`heatmap__cell ${level > 0 ? `heatmap__cell--level-${level}` : ''}`}
                style={{ width: '14px', height: '14px', borderRadius: '3px', display: 'inline-block' }}
              />
            ))}
            More
          </div>
        </div>

        {/* Weak Topics */}
        <div className="dashboard-card animate-fade-in-up stagger-4" id="weak-topics-card">
          <h3 className="dashboard-card__title">🔴 Weakest Topics</h3>
          {weakTopics.map((topic) => (
            <div key={topic.name} className="weak-topic-item">
              <div className="weak-topic-item__indicator" style={{ background: topic.color }} />
              <div style={{ flex: 1 }}>
                <span className="weak-topic-item__name">{topic.name}</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{topic.subject}</span>
              </div>
              <span className="weak-topic-item__accuracy" style={{ color: topic.color }}>
                {topic.accuracy}%
              </span>
            </div>
          ))}
          <button className="btn btn--outline btn--sm" style={{ marginTop: 'var(--space-md)', width: '100%' }} id="practice-weak-btn">
            Practice Weak Topics →
          </button>
        </div>

        {/* Strong Topics */}
        <div className="dashboard-card animate-fade-in-up stagger-5" id="strong-topics-card">
          <h3 className="dashboard-card__title">🟢 Strongest Topics</h3>
          {strongTopics.map((topic) => (
            <div key={topic.name} className="weak-topic-item">
              <div className="weak-topic-item__indicator" style={{ background: topic.color }} />
              <div style={{ flex: 1 }}>
                <span className="weak-topic-item__name">{topic.name}</span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{topic.subject}</span>
              </div>
              <span className="weak-topic-item__accuracy" style={{ color: topic.color }}>
                {topic.accuracy}%
              </span>
            </div>
          ))}
        </div>

        {/* Recent Mistakes */}
        <div className="dashboard-card animate-fade-in-up stagger-6" id="recent-mistakes-card" style={{ gridColumn: '1 / -1' }}>
          <h3 className="dashboard-card__title">❌ Recent Mistakes — Learn From Them</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {recentMistakes.map((mistake, idx) => (
              <div key={idx} style={{
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-tertiary)',
                borderLeft: '3px solid var(--danger)',
              }}>
                <p style={{ fontWeight: 500, marginBottom: '6px' }}>{mistake.question}</p>
                <div style={{ display: 'flex', gap: 'var(--space-lg)', fontSize: '0.85rem', flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--danger)' }}>Your answer: <strong>{mistake.yourAnswer}</strong></span>
                  <span style={{ color: 'var(--success)' }}>Correct: <strong>{mistake.correct}</strong></span>
                  <span style={{ color: 'var(--text-tertiary)' }}>Topic: {mistake.topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Next */}
        <div className="dashboard-card animate-fade-in-up" style={{ gridColumn: '1 / -1' }} id="recommended-card">
          <h3 className="dashboard-card__title">🎯 Recommended Next</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-md)',
          }}>
            {[
              { icon: '🧬', topic: 'Connective Tissue', reason: 'Continues from Epithelial Tissue', subject: 'Biology' },
              { icon: '⚛️', topic: 'Dimensional Analysis', reason: 'Weak area — needs review', subject: 'Physics' },
              { icon: '⚗️', topic: 'Percentage Composition', reason: 'Follows Mole Concept', subject: 'Chemistry' },
            ].map((rec, idx) => (
              <div key={idx} className="glass-card" style={{ cursor: 'pointer' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 'var(--space-sm)' }}>{rec.icon}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>{rec.topic}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-sm)' }}>
                  {rec.subject} · {rec.reason}
                </p>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>
                  Start Practice →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Revision Reminder ── */}
      <section style={{ marginTop: 'var(--space-xl)' }}>
        <div className="glass-card gradient-border animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>🔔</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>Revision Reminder</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
            You haven&apos;t revised <strong>Kingdom Fungi</strong> in 5 days.
            Revising it now will strengthen your memory!
          </p>
          <Link href="/practice?topics=bio-ch2-t3-s1,bio-ch2-t3-s2,bio-ch2-t3-s3,bio-ch2-t3-s4" className="btn btn--primary" id="revision-btn">
            📖 Revise Now
          </Link>
        </div>
      </section>
    </div>
  );
}
