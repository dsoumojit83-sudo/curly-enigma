'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBookmarks, toggleBookmark } from '@/lib/storage';
import { useData } from '@/context/DataContext';

export default function BookmarksPage() { const { questions, loading } = useData(); const getQuestionById = (id) => questions.find(q => q.id === id);
  if (loading) return null;
  const [bookmarkIds, setBookmarkIds] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setMounted(true);
    setBookmarkIds(getBookmarks());
  }, []);

  const bookmarkedQuestions = bookmarkIds.map(id => getQuestionById(id)).filter(Boolean);

  const filtered = filter === 'all' ? bookmarkedQuestions
    : bookmarkedQuestions.filter(q => {
        const prefix = filter === 'biology' ? 'bio' : filter === 'physics' ? 'phy' : 'chem';
        return q.topic.startsWith(prefix);
      });

  const handleRemove = (qId) => {
    toggleBookmark(qId);
    setBookmarkIds(getBookmarks());
  };

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>🔖 Bookmarks</h1>
        <p>Questions you saved for later review ({bookmarkedQuestions.length} saved)</p>
      </div>

      <div className="tabs animate-fade-in-up stagger-1">
        {['all', 'biology', 'physics', 'chemistry'].map(f => (
          <button key={f} className={`tab ${filter === f ? 'tab--active' : ''}`} onClick={() => setFilter(f)}>
            {f === 'all' && `📚 All (${bookmarkedQuestions.length})`}
            {f === 'biology' && '🧬 Bio'}
            {f === 'physics' && '⚛️ Phy'}
            {f === 'chemistry' && '⚗️ Chem'}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 'var(--space-lg)' }}>
        {!mounted || filtered.length === 0 ? (
          <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <span style={{ fontSize: '3rem' }}>🔖</span>
            <h3 style={{ marginTop: 'var(--space-md)' }}>No bookmarks yet</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>
              Bookmark questions while practicing to find them here later.
            </p>
            <Link href="/" className="btn btn--primary" style={{ marginTop: 'var(--space-md)' }}>Start Practicing</Link>
          </div>
        ) : (
          filtered.map((q, i) => (
            <div key={q.id} className={`glass-card animate-fade-in-up stagger-${Math.min(i + 1, 6)}`} style={{ marginBottom: 'var(--space-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                    {q.isPYQ ? `📋 PYQ ${q.year}` : '📝 Practice'} · {q.difficulty}
                  </div>
                  <p style={{ fontWeight: 500, marginBottom: 'var(--space-sm)' }}>{q.question}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 600 }}>
                    ✅ {q.options[q.correct]}
                  </p>
                  {q.explanation.memoryTrick && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      💡 {q.explanation.memoryTrick}
                    </p>
                  )}
                </div>
                <button className="btn btn--sm btn--ghost" onClick={() => handleRemove(q.id)} title="Remove bookmark">
                  ❌
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}
