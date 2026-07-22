'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useData } from '@/context/DataContext';
import { saveAnswer, updateTodayStats, recordPracticeToday, recordPracticeSession, saveMockTestResult } from '@/lib/storage';

export default function MockTestPage() { const { questions, loading } = useData();
  if (loading) return null;
  const [mode, setMode] = useState('setup'); // setup | running | review
  const [testConfig, setTestConfig] = useState({ subject: 'all', count: 20, time: 30 });
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [results, setResults] = useState(null);
  const timerRef = useRef(null);

  // Timer
  useEffect(() => {
    if (mode === 'running' && timeLeft > 0) {
      timerRef.current = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timerRef.current);
    }
    if (mode === 'running' && timeLeft === 0 && testQuestions.length > 0) {
      finishTest();
    }
  }, [mode, timeLeft]);

  const startTest = () => {
    let pool = [...questions];
    if (testConfig.subject !== 'all') {
      const prefix = testConfig.subject === 'biology' ? 'bio' : testConfig.subject === 'physics' ? 'phy' : 'chem';
      pool = pool.filter(q => q.topic.startsWith(prefix));
    }
    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const selected = pool.slice(0, testConfig.count);
    setTestQuestions(selected);
    setAnswers({});
    setMarked(new Set());
    setCurrentIndex(0);
    setTimeLeft(testConfig.time * 60);
    setMode('running');
  };

  const selectAnswer = (qId, optionIndex) => {
    setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const toggleMark = (qId) => {
    setMarked(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const finishTest = useCallback(() => {
    clearTimeout(timerRef.current);
    let correct = 0, wrong = 0, unanswered = 0;
    testQuestions.forEach(q => {
      if (answers[q.id] === undefined) { unanswered++; return; }
      if (answers[q.id] === q.correct) { correct++; saveAnswer(q.topic, true); updateTodayStats(true, q.topic); }
      else { wrong++; saveAnswer(q.topic, false); updateTodayStats(false, q.topic); }
    });
    recordPracticeToday();
    recordPracticeSession(testQuestions.map(q => q.topic), testQuestions.length);
    const total = testQuestions.length;
    const score = correct * 4 - wrong * 1; // NEET marking
    const maxScore = total * 4;
    const r = { correct, wrong, unanswered, total, score, maxScore, accuracy: total > 0 ? Math.round((correct / total) * 100) : 0, subject: testConfig.subject, timeUsed: testConfig.time * 60 - timeLeft };
    setResults(r);
    saveMockTestResult(r);
    setMode('review');
  }, [answers, testQuestions, testConfig, timeLeft]);

  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
  const q = testQuestions[currentIndex];

  if (mode === 'setup') {
    return (
      <div className="container">
        <div className="page-header animate-fade-in-up">
          <h1>📋 Mock Test</h1>
          <p>Simulate the real NEET exam with timed tests and negative marking.</p>
        </div>

        <div className="glass-card animate-fade-in-up stagger-1" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-lg)' }}>Configure Your Test</h3>

          <div className="auth-card__field" style={{ marginBottom: 'var(--space-md)' }}>
            <label>Subject</label>
            <select value={testConfig.subject} onChange={e => setTestConfig(c => ({ ...c, subject: e.target.value }))} style={{ width: '100%', padding: 'var(--space-sm) var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              <option value="all">All Subjects</option>
              <option value="biology">🧬 Biology</option>
              <option value="physics">⚛️ Physics</option>
              <option value="chemistry">⚗️ Chemistry</option>
            </select>
          </div>

          <div className="auth-card__field" style={{ marginBottom: 'var(--space-md)' }}>
            <label>Number of Questions</label>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {[10, 20, 30, 50].map(n => (
                <button key={n} className={`btn btn--sm ${testConfig.count === n ? 'btn--primary' : 'btn--outline'}`} onClick={() => setTestConfig(c => ({ ...c, count: n }))} style={{ flex: 1 }}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="auth-card__field" style={{ marginBottom: 'var(--space-lg)' }}>
            <label>Time Limit (minutes)</label>
            <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
              {[15, 30, 45, 60].map(t => (
                <button key={t} className={`btn btn--sm ${testConfig.time === t ? 'btn--primary' : 'btn--outline'}`} onClick={() => setTestConfig(c => ({ ...c, time: t }))} style={{ flex: 1 }}>
                  {t}m
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ background: 'var(--bg-secondary)', marginBottom: 'var(--space-lg)', padding: 'var(--space-md)' }}>
            <h4 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 'var(--space-xs)' }}>📊 Marking Scheme</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              ✅ +4 for correct &nbsp; ❌ -1 for wrong &nbsp; ⏭️ 0 for unanswered
            </p>
          </div>

          <button className="btn btn--primary btn--full btn--lg" onClick={startTest} id="start-test-btn">
            🚀 Start Test
          </button>
        </div>
        <div style={{ height: 'var(--space-2xl)' }} />
      </div>
    );
  }

  if (mode === 'review') {
    return (
      <div className="container">
        <div className="page-header animate-fade-in-up">
          <h1>📊 Test Results</h1>
        </div>

        {/* Score Card */}
        <div className="glass-card gradient-border animate-fade-in-up stagger-1" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>
            {results.accuracy >= 80 ? '🏆' : results.accuracy >= 60 ? '🎯' : results.accuracy >= 40 ? '💪' : '📚'}
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>
            {results.score}/{results.maxScore}
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
            {results.accuracy}% accuracy · {formatTime(results.timeUsed)} time used
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)' }}>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--success)' }}>{results.correct}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Correct</div>
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--error)' }}>{results.wrong}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Wrong</div>
            </div>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--warning)' }}>{results.unanswered}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Skipped</div>
            </div>
          </div>
        </div>

        {/* Review Questions */}
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>📝 Question Review</h3>
          {testQuestions.map((question, i) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isUnanswered = userAnswer === undefined;
            return (
              <div key={question.id} className="glass-card animate-fade-in-up" style={{ marginBottom: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                  <span style={{ fontSize: '1.2rem' }}>
                    {isUnanswered ? '⏭️' : isCorrect ? '✅' : '❌'}
                  </span>
                  <span style={{ fontWeight: 600 }}>Q{i + 1}.</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{question.difficulty}</span>
                </div>
                <p style={{ fontWeight: 500, marginBottom: 'var(--space-sm)' }}>{question.question}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {question.options.map((opt, oi) => (
                    <div key={oi} style={{
                      padding: '6px var(--space-sm)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.9rem',
                      background: oi === question.correct ? 'var(--success)15' : oi === userAnswer && !isCorrect ? 'var(--error)15' : 'transparent',
                      color: oi === question.correct ? 'var(--success)' : oi === userAnswer && !isCorrect ? 'var(--error)' : 'var(--text-secondary)',
                      fontWeight: oi === question.correct ? 600 : 400,
                    }}>
                      {String.fromCharCode(65 + oi)}. {opt}
                      {oi === question.correct && ' ✓'}
                      {oi === userAnswer && oi !== question.correct && ' ✗'}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 'var(--space-sm)', lineHeight: 1.5 }}>
                  💡 {question.explanation.correct}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)', marginBottom: 'var(--space-2xl)' }}>
          <button className="btn btn--primary btn--lg" onClick={() => setMode('setup')}>Take Another Test</button>
        </div>
      </div>
    );
  }

  // Running mode
  return (
    <div className="container">
      {/* Timer Bar */}
      <div className="mock-test-header glass animate-fade-in-up" id="mock-test-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 700 }}>📋 Mock Test</span>
          <span className={`mock-test-timer ${timeLeft < 120 ? 'mock-test-timer--warning' : ''}`} id="mock-timer">
            ⏱️ {formatTime(timeLeft)}
          </span>
        </div>
        <div style={{ height: '3px', borderRadius: '2px', background: 'var(--bg-secondary)', marginTop: 'var(--space-sm)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${((currentIndex + 1) / testQuestions.length) * 100}%`, background: 'var(--primary)', transition: 'width 0.3s' }} />
        </div>
      </div>

      {/* Question */}
      {q && (
        <div className="animate-fade-in-up" style={{ marginTop: 'var(--space-md)' }}>
          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
              <span style={{ fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Question {currentIndex + 1}/{testQuestions.length}
              </span>
              <button
                className={`btn btn--sm ${marked.has(q.id) ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => toggleMark(q.id)}
              >
                {marked.has(q.id) ? '🔖 Marked' : '🏷️ Mark'}
              </button>
            </div>
            <p style={{ fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
              {q.question}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  className={`option-btn ${answers[q.id] === oi ? 'option-btn--selected' : ''}`}
                  onClick={() => selectAnswer(q.id, oi)}
                >
                  <span className="option-btn__letter">{String.fromCharCode(65 + oi)}</span>
                  <span>{opt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Question Nav Grid */}
      <div className="glass-card animate-fade-in-up" style={{ marginTop: 'var(--space-md)' }}>
        <h4 style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: 'var(--space-sm)' }}>📊 Question Palette</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {testQuestions.map((tq, i) => (
            <button
              key={tq.id}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: '32px', height: '32px', borderRadius: '6px', fontSize: '0.75rem',
                fontWeight: 600, cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                background: i === currentIndex ? 'var(--primary)' : answers[tq.id] !== undefined ? 'var(--success)' : marked.has(tq.id) ? 'var(--warning)' : 'var(--bg-secondary)',
                color: (i === currentIndex || answers[tq.id] !== undefined || marked.has(tq.id)) ? '#fff' : 'var(--text-secondary)',
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-sm)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
          <span>🟢 Answered</span>
          <span>🟡 Marked</span>
          <span>⚪ Not visited</span>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
        <button className="btn btn--outline" onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0} style={{ flex: 1 }}>
          ← Prev
        </button>
        {currentIndex < testQuestions.length - 1 ? (
          <button className="btn btn--primary" onClick={() => setCurrentIndex(currentIndex + 1)} style={{ flex: 1 }}>
            Next →
          </button>
        ) : (
          <button className="btn btn--primary" onClick={finishTest} style={{ flex: 1 }} id="submit-test-btn">
            ✅ Submit Test
          </button>
        )}
      </div>
    </div>
  );
}
