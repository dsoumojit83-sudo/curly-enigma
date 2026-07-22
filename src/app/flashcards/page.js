'use client';

import { useState, useEffect, useCallback } from 'react';
import { useData } from '@/context/DataContext';
import { getFlashcardsDue, updateFlashcard, getFlashcardProgress } from '@/lib/storage';

export default function FlashcardsPage() { const { questions, loading } = useData(); const getQuestionsBySubject = (prefix) => questions.filter(q => q.topic_id && q.topic_id.startsWith(prefix));
  if (loading) return null;
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState('all');
  const [completed, setCompleted] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadCards('all');
  }, []);

  const loadCards = (filterType) => {
    let pool = [];
    if (filterType === 'due') {
      const dueIds = getFlashcardsDue();
      pool = questions.filter(q => dueIds.includes(q.id));
    } else if (filterType === 'biology' || filterType === 'physics' || filterType === 'chemistry') {
      const prefix = filterType === 'biology' ? 'bio' : filterType === 'physics' ? 'phy' : 'chem';
      pool = getQuestionsBySubject(prefix);
    } else {
      pool = [...questions];
    }
    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    setCards(pool.slice(0, 20));
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(0);
  };

  const handleRate = (quality) => {
    const card = cards[currentIndex];
    if (card) updateFlashcard(card.id, quality);
    setCompleted(c => c + 1);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsFlipped(false);
    }
  };

  const card = cards[currentIndex];
  const progress = card ? ((currentIndex + 1) / cards.length) * 100 : 0;

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>🃏 Flashcards</h1>
        <p>Swipe through cards to revise. Spaced repetition helps you remember longer.</p>
      </div>

      {/* Filter */}
      <div className="tabs animate-fade-in-up stagger-1">
        {['all', 'due', 'biology', 'physics', 'chemistry'].map(f => (
          <button key={f} className={`tab ${filter === f ? 'tab--active' : ''}`} onClick={() => { setFilter(f); loadCards(f); }}>
            {f === 'all' && '📚 All'}
            {f === 'due' && '📅 Due Today'}
            {f === 'biology' && '🧬 Bio'}
            {f === 'physics' && '⚛️ Phy'}
            {f === 'chemistry' && '⚗️ Chem'}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="animate-fade-in-up stagger-2" style={{ marginTop: 'var(--space-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
          <span>Card {currentIndex + 1} of {cards.length}</span>
          <span>{completed} reviewed</span>
        </div>
        <div style={{ height: '4px', borderRadius: '2px', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: 'var(--primary)', transition: 'width 0.3s ease', borderRadius: '2px' }} />
        </div>
      </div>

      {/* Card */}
      {card ? (
        <div className="animate-fade-in-up stagger-3" style={{ marginTop: 'var(--space-lg)' }}>
          <div
            className={`flashcard ${isFlipped ? 'flashcard--flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
            id="flashcard"
          >
            <div className="flashcard__inner">
              {/* Front */}
              <div className="flashcard__front glass-card">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)' }}>
                  {card.isPYQ ? `📋 PYQ ${card.year}` : '📝 Practice'} · {card.difficulty}
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.6 }}>
                  {card.question}
                </p>
                <div style={{ marginTop: 'var(--space-lg)', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                  Tap to reveal answer →
                </div>
              </div>

              {/* Back */}
              <div className="flashcard__back glass-card">
                <div style={{ color: 'var(--success)', fontWeight: 700, fontSize: '1rem', marginBottom: 'var(--space-sm)' }}>
                  ✅ {card.options[card.correct]}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                  {card.explanation.correct}
                </p>
                {card.explanation.memoryTrick && (
                  <div style={{ background: 'var(--warning)11', border: '1px solid var(--warning)33', borderRadius: 'var(--radius-md)', padding: 'var(--space-sm) var(--space-md)', fontSize: '0.85rem' }}>
                    💡 <strong>Memory Trick:</strong> {card.explanation.memoryTrick}
                  </div>
                )}
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: 'var(--space-md)' }}>
                  📖 {card.ncertRef}
                </div>
              </div>
            </div>
          </div>

          {/* Rating buttons (only show when flipped) */}
          {isFlipped && (
            <div className="flashcard-rating animate-fade-in-up" style={{ marginTop: 'var(--space-lg)' }}>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>How well did you know this?</p>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn--sm" style={{ background: 'var(--error)', color: '#fff' }} onClick={() => handleRate(0)}>
                  😵 Forgot
                </button>
                <button className="btn btn--sm" style={{ background: 'var(--warning)', color: '#fff' }} onClick={() => handleRate(2)}>
                  😐 Hard
                </button>
                <button className="btn btn--sm" style={{ background: 'var(--info)', color: '#fff' }} onClick={() => handleRate(3)}>
                  🙂 Good
                </button>
                <button className="btn btn--sm" style={{ background: 'var(--success)', color: '#fff' }} onClick={() => handleRate(5)}>
                  🤩 Perfect
                </button>
              </div>
            </div>
          )}

          {/* Nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-lg)' }}>
            <button
              className="btn btn--outline"
              onClick={() => { setCurrentIndex(Math.max(0, currentIndex - 1)); setIsFlipped(false); }}
              disabled={currentIndex === 0}
            >
              ← Previous
            </button>
            <button
              className="btn btn--outline"
              onClick={() => { setCurrentIndex(Math.min(cards.length - 1, currentIndex + 1)); setIsFlipped(false); }}
              disabled={currentIndex >= cards.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        <div className="glass-card animate-fade-in-up" style={{ textAlign: 'center', padding: 'var(--space-2xl)', marginTop: 'var(--space-lg)' }}>
          <span style={{ fontSize: '3rem' }}>🎉</span>
          <h3 style={{ marginTop: 'var(--space-md)' }}>
            {filter === 'due' ? 'No flashcards due!' : 'No cards available.'}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>
            {filter === 'due' ? 'Practice some questions first, then they\'ll appear here for revision.' : 'Try a different filter.'}
          </p>
        </div>
      )}

      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}
