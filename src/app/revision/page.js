'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTopicsDueForRevision } from '@/lib/storage';
import { useData } from '@/context/DataContext';

const urgencyColor = (days) => {
  if (days >= 14) return 'var(--error)';
  if (days >= 7) return 'var(--warning)';
  return 'var(--info)';
};

export default function RevisionPage() {
  const { findTopicById, loading } = useData();
  const [dueTopics, setDueTopics] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDueTopics(getTopicsDueForRevision());
  }, []);

  if (loading) return null;

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>📅 Revision Scheduler</h1>
        <p>Spaced repetition ensures you remember what you&apos;ve learned. Topics due for revision appear here.</p>
      </div>

      {/* Explanation */}
      <div className="glass-card animate-fade-in-up stagger-1" style={{ background: 'var(--primary)08', borderLeft: '3px solid var(--primary)' }}>
        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 'var(--space-xs)' }}>How Spaced Repetition Works</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Topics are scheduled for review based on your mastery level: <br />
          📘 Low mastery (0-40%) → Review every <strong>1 day</strong><br />
          📗 Medium (40-60%) → Review every <strong>3 days</strong><br />
          📙 Good (60-80%) → Review every <strong>7 days</strong><br />
          📕 Mastered (80%+) → Review every <strong>14 days</strong>
        </p>
      </div>

      {/* Due topics */}
      <div style={{ marginTop: 'var(--space-lg)' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>
          🔴 Due for Revision ({dueTopics.length})
        </h3>

        {!mounted || dueTopics.length === 0 ? (
          <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <span style={{ fontSize: '3rem' }}>🎉</span>
            <h3 style={{ marginTop: 'var(--space-md)' }}>All caught up!</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>
              No topics due for revision. Keep practicing to build your revision schedule!
            </p>
            <Link href="/" className="btn btn--primary" style={{ marginTop: 'var(--space-md)' }}>Continue Practicing</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {dueTopics.map((topic, i) => {
              const info = findTopicById(topic.topicId);
              if (!info) return null;
              const Icon = info.subject === 'biology' ? '🧬' : info.subject === 'physics' ? '⚛️' : info.subject === 'chemistry' ? '⚗️' : '📐';
              return (
                <div key={topic.topicId} className={`glass-card animate-fade-in-up stagger-${Math.min(i + 1, 6)}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                      {Icon} {info.name}
                    </h4>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', display: 'flex', gap: 'var(--space-md)', marginTop: '2px' }}>
                      <span style={{ color: urgencyColor(topic.daysSince) }}>
                        ⏰ {topic.daysSince} days overdue
                      </span>
                      <span>🎯 {topic.accuracy}% accuracy</span>
                    </div>
                  </div>
                  <Link href={`/practice?topics=${topic.topicId}`} className="btn btn--outline" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>
                    Revise Now
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}
