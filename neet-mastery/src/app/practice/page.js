'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import allQuestions from '@/data/questions';

/* ── Option Letters ── */
const LETTERS = ['A', 'B', 'C', 'D'];

/* ── Explanation Panel ── */
function ExplanationPanel({ question, selectedIndex }) {
  const isCorrect = selectedIndex === question.correctIndex;
  const exp = question.explanation;

  return (
    <div className="explanation-panel">
      <div className={`explanation-panel__header ${isCorrect ? 'explanation-panel__header--correct' : 'explanation-panel__header--wrong'}`}>
        {isCorrect ? '✅ Correct! Well done!' : '❌ Incorrect — Let\'s learn from this'}
      </div>

      <div className="explanation-panel__body">
        {/* Why the correct answer is correct */}
        <div className="explanation-panel__section">
          <div className="explanation-panel__section-title">
            ✅ Why Option {LETTERS[question.correctIndex]} is Correct
          </div>
          <p>{exp.correct}</p>
        </div>

        {/* Why each wrong option is wrong */}
        {!isCorrect && (
          <div className="explanation-panel__section">
            <div className="explanation-panel__section-title">
              ❌ Why Option {LETTERS[selectedIndex]} is Wrong
            </div>
            <p>{exp.whyWrong[selectedIndex]}</p>
          </div>
        )}

        {/* Explain all other options */}
        <div className="explanation-panel__section">
          <div className="explanation-panel__section-title">📋 All Options Explained</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {question.options.map((opt, idx) => (
              <div key={idx} style={{
                padding: 'var(--space-sm) var(--space-md)',
                borderRadius: 'var(--radius-sm)',
                background: idx === question.correctIndex
                  ? 'rgba(0, 206, 201, 0.06)'
                  : 'var(--bg-tertiary)',
                borderLeft: `3px solid ${idx === question.correctIndex ? 'var(--success)' : 'var(--danger)'}`,
              }}>
                <strong style={{ color: idx === question.correctIndex ? 'var(--success)' : 'var(--text-primary)' }}>
                  {LETTERS[idx]}. {opt}
                </strong>
                {exp.whyWrong[idx] && (
                  <p style={{ margin: '4px 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {exp.whyWrong[idx]}
                  </p>
                )}
                {idx === question.correctIndex && (
                  <p style={{ margin: '4px 0 0', fontSize: '0.88rem', color: 'var(--success)' }}>
                    ✅ {exp.correct}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* NCERT Highlight */}
        {exp.ncertHighlight && (
          <div className="explanation-panel__section">
            <div className="explanation-panel__section-title">📖 Key NCERT Concept</div>
            <p style={{ fontWeight: 500 }}>{exp.ncertHighlight}</p>
            <span className="explanation-panel__ncert-ref">
              📚 {question.ncertRef}
            </span>
          </div>
        )}

        {/* Memory Trick */}
        {exp.memoryTrick && (
          <div className="explanation-panel__section">
            <div className="explanation-panel__section-title">🧠 Memory Trick</div>
            <div className="explanation-panel__memory-trick">
              {exp.memoryTrick}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {exp.comparison && (
          <div className="explanation-panel__section">
            <div className="explanation-panel__section-title">📊 Quick Comparison</div>
            <div style={{ overflowX: 'auto' }}>
              <table className="explanation-panel__comparison">
                <thead>
                  <tr>
                    {exp.comparison.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {exp.comparison.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Related Concepts */}
        {exp.relatedConcepts && (
          <div className="explanation-panel__section">
            <div className="explanation-panel__section-title">🔗 Related Concepts</div>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              {exp.relatedConcepts.map((concept, idx) => (
                <span key={idx} className="question-card__tag">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Practice Page Inner (needs useSearchParams) ── */
function PracticeInner() {
  const searchParams = useSearchParams();
  const topicsParam = searchParams.get('topics') || '';
  const selectedTopicIds = useMemo(() => new Set(topicsParam.split(',').filter(Boolean)), [topicsParam]);

  // Filter questions based on selected topics (Confidence Learning Mode)
  const filteredQuestions = useMemo(() => {
    if (selectedTopicIds.size === 0) return allQuestions;
    return allQuestions.filter((q) => selectedTopicIds.has(q.topicId));
  }, [selectedTopicIds]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0, total: 0 });
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(0);

  // Timer
  useEffect(() => {
    if (showResults) return;
    const interval = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [showResults]);

  const currentQuestion = filteredQuestions[currentIndex];
  const isLastQuestion = currentIndex >= filteredQuestions.length - 1;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleOptionClick = (idx) => {
    if (answered) return;
    setSelectedOption(idx);
    setAnswered(true);

    const isCorrect = idx === currentQuestion.correctIndex;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setAnswered(false);
  };

  // No questions found for selected topics
  if (filteredQuestions.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-3xl)' }}>
        <div style={{ fontSize: '4rem', marginBottom: 'var(--space-lg)' }}>📭</div>
        <h2>No Questions Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-md)', maxWidth: '480px', margin: 'var(--space-md) auto 0' }}>
          No questions are available for the selected topics yet. Try selecting different topics or a broader selection.
        </p>
        <Link href="/" className="btn btn--primary" style={{ marginTop: 'var(--space-xl)' }}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="glass-card gradient-border animate-scale-in" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
          <div style={{ fontSize: '4rem', marginBottom: 'var(--space-md)' }}>
            {accuracy >= 80 ? '🏆' : accuracy >= 50 ? '💪' : '📚'}
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 'var(--space-sm)' }}>
            Practice Complete!
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
            Time taken: {formatTime(timer)}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-xl)',
          }}>
            <div className="stat-card">
              <div className="stat-card__value" style={{
                background: 'linear-gradient(135deg, var(--success), var(--biology))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {score.correct}
              </div>
              <div className="stat-card__label">Correct</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value" style={{
                background: 'linear-gradient(135deg, var(--danger), var(--chemistry))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {score.wrong}
              </div>
              <div className="stat-card__label">Wrong</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__value">{accuracy}%</div>
              <div className="stat-card__label">Accuracy</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn--outline" id="go-home-btn">🏠 Home</Link>
            <button
              className="btn btn--primary"
              onClick={() => {
                setCurrentIndex(0);
                setSelectedOption(null);
                setAnswered(false);
                setScore({ correct: 0, wrong: 0, total: 0 });
                setShowResults(false);
                setTimer(0);
              }}
              id="retry-btn"
            >
              🔄 Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* ── Practice Header ── */}
      <div className="practice-header animate-fade-in">
        <div>
          <Link href="/" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>← Back</Link>
        </div>
        <div className="practice-header__info">
          <span className="practice-header__counter" id="question-counter">
            Question {currentIndex + 1} of {filteredQuestions.length}
          </span>
          <span className="practice-header__timer" id="practice-timer">
            ⏱ {formatTime(timer)}
          </span>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: score.correct > score.wrong ? 'var(--success)' : 'var(--danger)',
          }}>
            {score.correct}✓ {score.wrong}✗
          </span>
        </div>
      </div>

      {/* ── Progress Bar ── */}
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <div className="progress-bar">
          <div
            className="progress-bar__fill"
            style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* ── Question Card ── */}
      <div className="question-card" key={currentQuestion.id}>
        {/* Tags */}
        <div className="question-card__meta">
          <span className={`question-card__tag question-card__tag--difficulty-${currentQuestion.difficulty}`}>
            {currentQuestion.difficulty === 'easy' ? '🟢' : currentQuestion.difficulty === 'medium' ? '🟡' : '🔴'}{' '}
            {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
          </span>
          {currentQuestion.isPYQ && (
            <span className="question-card__tag question-card__tag--pyq">
              📋 PYQ {currentQuestion.yearAsked}
            </span>
          )}
          <span className="question-card__tag">
            📚 {currentQuestion.ncertRef}
          </span>
        </div>

        {/* Question Text */}
        <div className="question-card__number">
          Question {currentIndex + 1}
        </div>
        <p className="question-card__text">{currentQuestion.text}</p>

        {/* Options */}
        <div className="options-list" id="options-list">
          {currentQuestion.options.map((option, idx) => {
            let stateClass = '';
            if (answered) {
              if (idx === currentQuestion.correctIndex) stateClass = 'option-btn--correct';
              else if (idx === selectedOption) stateClass = 'option-btn--wrong';
              else stateClass = 'option-btn--disabled';
            }

            return (
              <button
                key={idx}
                className={`option-btn ${stateClass}`}
                onClick={() => handleOptionClick(idx)}
                disabled={answered}
                id={`option-${LETTERS[idx]}`}
              >
                <span className="option-btn__letter">{LETTERS[idx]}</span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answered && (
          <ExplanationPanel question={currentQuestion} selectedIndex={selectedOption} />
        )}

        {/* Next Button */}
        {answered && (
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <button
              className="btn btn--primary btn--lg"
              onClick={handleNext}
              id="next-question-btn"
            >
              {isLastQuestion ? '🏁 See Results' : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Suspense Wrapper (required for useSearchParams) ── */
export default function PracticePage() {
  return (
    <Suspense fallback={
      <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-3xl)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading practice session...</p>
      </div>
    }>
      <PracticeInner />
    </Suspense>
  );
}
