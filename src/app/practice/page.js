'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useData } from '@/context/DataContext';
import { saveAnswer, updateTodayStats, recordPracticeToday, recordPracticeSession, toggleBookmark, isBookmarked, addRecentTopic } from '@/lib/storage';

/* ── Option Letters ── */
const LETTERS = ['A', 'B', 'C', 'D'];

/* ── Explanation Panel ── */
function ExplanationPanel({ question, selectedIndex }) {
  const isCorrect = selectedIndex === question.correct;
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
            ✅ Why Option {LETTERS[question.correct]} is Correct
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
                background: idx === question.correct
                  ? 'rgba(0, 206, 201, 0.06)'
                  : 'var(--bg-tertiary)',
                borderLeft: `3px solid ${idx === question.correct ? 'var(--success)' : 'var(--danger)'}`,
              }}>
                <strong style={{ color: idx === question.correct ? 'var(--success)' : 'var(--text-primary)' }}>
                  {LETTERS[idx]}. {opt}
                </strong>
                {exp.whyWrong[idx] && (
                  <p style={{ margin: '4px 0 0', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {exp.whyWrong[idx]}
                  </p>
                )}
                {idx === question.correct && (
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

  const { questions: allQuestions, loading } = useData();

  // Filter questions based on selected topics (Confidence Learning Mode)
  const filteredQuestions = useMemo(() => {
    if (selectedTopicIds.size === 0) return allQuestions;
    return allQuestions.filter((q) => selectedTopicIds.has(q.topic_id));
  }, [selectedTopicIds, allQuestions]);

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

  const handleSubmitAnswer = (userAnswer) => {
    if (answered) return;
    setSelectedOption(userAnswer);
    setAnswered(true);

    let isCorrect = false;
    const correctAns = currentQuestion.correct_answer;

    if (currentQuestion.type === 'numerical') {
      isCorrect = String(userAnswer).trim() === String(correctAns).trim();
    } else if (currentQuestion.type === 'multi-correct') {
      const sortedUser = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
      const sortedCorrect = Array.isArray(correctAns) ? [...correctAns].sort() : [];
      isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
    } else {
      isCorrect = Number(userAnswer) === Number(correctAns);
    }

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
      total: prev.total + 1,
    }));

    // Persist to storage
    saveAnswer(currentQuestion.topic_id, isCorrect);
    updateTodayStats(isCorrect, currentQuestion.topic_id);
    recordPracticeToday();
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
      // Record session
      const topicIds = [...new Set(filteredQuestions.map(q => q.topic_id))];
      recordPracticeSession(topicIds, filteredQuestions.length);
      topicIds.forEach(tid => {
        const subjectPrefix = tid.startsWith('bio') ? 'biology' : tid.startsWith('phy') ? 'physics' : 'chemistry';
        addRecentTopic(tid, tid, subjectPrefix);
      });
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setAnswered(false);
  };

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: 'var(--space-3xl)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Loading questions...</p>
      </div>
    );
  }

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
          <span className={`question-card__tag question-card__tag--difficulty-${currentQuestion.difficulty.toLowerCase()}`}>
            {currentQuestion.difficulty === 'Easy' ? '🟢' : currentQuestion.difficulty === 'Medium' ? '🟡' : '🔴'}{' '}
            {currentQuestion.difficulty}
          </span>
          {currentQuestion.is_pyq && (
            <span className="question-card__tag question-card__tag--pyq">
              📋 PYQ {currentQuestion.year}
            </span>
          )}
          <span className="question-card__tag">
            📚 {currentQuestion.ncert_ref}
          </span>
        </div>

        {/* Question Text */}
        <div className="question-card__number">
          Question {currentIndex + 1}
        </div>
        <p className="question-card__text">{currentQuestion.question_text}</p>

        {/* Question Inputs */}
        <div className="options-list" id="options-list">
          {currentQuestion.type === 'match' && currentQuestion.match_columns && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)', background: 'var(--bg-secondary)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)' }}>
              <div>
                <h5 style={{ marginBottom: 'var(--space-sm)' }}>Column A</h5>
                {currentQuestion.match_columns.colA.map((item, i) => (
                  <div key={i} style={{ marginBottom: '4px' }}>{item}</div>
                ))}
              </div>
              <div>
                <h5 style={{ marginBottom: 'var(--space-sm)' }}>Column B</h5>
                {currentQuestion.match_columns.colB.map((item, i) => (
                  <div key={i} style={{ marginBottom: '4px' }}>{item}</div>
                ))}
              </div>
            </div>
          )}

          {currentQuestion.type === 'numerical' ? (
            <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
              <input 
                type="number" 
                id="numerical-answer"
                placeholder="Enter your answer..."
                disabled={answered}
                className="input"
                style={{ flex: 1, padding: '0.8rem', fontSize: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    handleSubmitAnswer(e.target.value);
                  }
                }}
              />
              {!answered && (
                <button 
                  className="btn btn--primary" 
                  onClick={() => {
                    const val = document.getElementById('numerical-answer').value;
                    if (val) handleSubmitAnswer(val);
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          ) : currentQuestion.type === 'multi-correct' ? (
            <div>
              {currentQuestion.options.map((option, idx) => {
                let stateClass = '';
                const isSelected = Array.isArray(selectedOption) && selectedOption.includes(idx);
                const isCorrectOption = Array.isArray(currentQuestion.correct_answer) && currentQuestion.correct_answer.includes(idx);
                
                if (answered) {
                  if (isCorrectOption) stateClass = 'option-btn--correct';
                  else if (isSelected && !isCorrectOption) stateClass = 'option-btn--wrong';
                  else stateClass = 'option-btn--disabled';
                }

                return (
                  <label key={idx} className={`option-btn ${stateClass}`} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', cursor: answered ? 'default' : 'pointer' }}>
                    <input 
                      type="checkbox" 
                      disabled={answered}
                      id={`multi-opt-${idx}`}
                      defaultChecked={isSelected}
                      style={{ width: '1.2rem', height: '1.2rem' }}
                    />
                    <span>{LETTERS[idx]}. {option}</span>
                  </label>
                );
              })}
              {!answered && (
                <button 
                  className="btn btn--primary" 
                  style={{ marginTop: 'var(--space-lg)', width: '100%' }}
                  onClick={() => {
                    const selected = [];
                    currentQuestion.options.forEach((_, idx) => {
                      if (document.getElementById(`multi-opt-${idx}`).checked) selected.push(idx);
                    });
                    if (selected.length > 0) handleSubmitAnswer(selected);
                  }}
                >
                  Submit Answer
                </button>
              )}
            </div>
          ) : (
            // Standard MCQ / Assertion / Statement / Match options
            currentQuestion.options.map((option, idx) => {
              let stateClass = '';
              if (answered) {
                if (idx === Number(currentQuestion.correct_answer)) stateClass = 'option-btn--correct';
                else if (idx === Number(selectedOption)) stateClass = 'option-btn--wrong';
                else stateClass = 'option-btn--disabled';
              }

              return (
                <button
                  key={idx}
                  className={`option-btn ${stateClass}`}
                  onClick={() => handleSubmitAnswer(idx)}
                  disabled={answered}
                  id={`option-${LETTERS[idx]}`}
                >
                  <span className="option-btn__letter">{LETTERS[idx]}</span>
                  <span>{option}</span>
                </button>
              );
            })
          )}
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
