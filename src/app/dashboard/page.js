'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProgressBar from '@/components/ui/ProgressBar';
import { getOverallStats, getStreak, getSubjectStats, getDailyHistory, getTodayStats, getWeakTopics, getStrongTopics } from '@/lib/storage';
import { useData } from '@/context/DataContext';

const subjectMeta = {
  biology: { icon: '🧬', color: 'var(--biology)' },
  physics: { icon: '⚛️', color: 'var(--physics)' },
  chemistry: { icon: '⚗️', color: 'var(--chemistry)' },
  mathematics: { icon: '📐', color: 'var(--physics)' }, // reusing color for now
};

export default function DashboardPage() {
  const [overall, setOverall] = useState({ totalQuestions: 0, accuracy: 0, streak: 0, topicsMastered: 0 });
  const [todayStats, setToday] = useState({ questions: 0, correct: 0 });
  const [subjectData, setSubjectData] = useState({});
  const [history, setHistory] = useState([]);
  const [weakTopics, setWeakTopics] = useState([]);
  const [strongTopics, setStrongTopics] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const { syllabus, findTopicById, loading } = useData();

  useEffect(() => {
    setMounted(true);
    setOverall(getOverallStats());
    setToday(getTodayStats());
    setSubjectData(getSubjectStats());
    setHistory(getDailyHistory());
    setWeakTopics(getWeakTopics());
    setStrongTopics(getStrongTopics());
  }, []);

  const dailyGoal = 30;
  const dailyProgress = mounted ? Math.min((todayStats.questions / dailyGoal) * 100, 100) : 0;

  // Streak calendar mock (last 28 days)
  const streakDays = mounted ? (history || []) : [];

  if (loading) return null;

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>📊 Your Dashboard</h1>
        <p>Track your NEET preparation progress in real-time.</p>
      </div>

      {/* ── Top Stats ── */}
      <div className="stats-row animate-fade-in-up stagger-1" id="dashboard-top-stats">
        <div className="stat-card stat-card--highlight">
          <div className="stat-card__icon">🔥</div>
          <div className="stat-card__value">{overall.streak}</div>
          <div className="stat-card__label">Day Streak</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">📝</div>
          <div className="stat-card__value">{overall.totalQuestions}</div>
          <div className="stat-card__label">Total Solved</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">🎯</div>
          <div className="stat-card__value">{overall.accuracy}%</div>
          <div className="stat-card__label">Accuracy</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">✅</div>
          <div className="stat-card__value">{overall.topicsMastered}</div>
          <div className="stat-card__label">Topics Mastered</div>
        </div>
      </div>

      {/* ── Daily Goal ── */}
      <div className="glass-card animate-fade-in-up stagger-2" style={{ marginTop: 'var(--space-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
          <h3 style={{ fontWeight: 700 }}>🎯 Daily Goal</h3>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            {mounted ? todayStats.questions : 0}/{dailyGoal} questions
          </span>
        </div>
        <ProgressBar progress={dailyProgress} color="var(--primary)" />
        <div style={{ display: 'flex', gap: 'var(--space-lg)', marginTop: 'var(--space-md)' }}>
          <div>
            <span style={{ color: 'var(--success)', fontWeight: 700 }}>✅ {mounted ? todayStats.correct : 0}</span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginLeft: '4px' }}>Correct</span>
          </div>
          <div>
            <span style={{ color: 'var(--error)', fontWeight: 700 }}>❌ {mounted ? todayStats.wrong : 0}</span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginLeft: '4px' }}>Wrong</span>
          </div>
          <div>
            <span style={{ color: 'var(--warning)', fontWeight: 700 }}>⏭️ {mounted ? (todayStats.questions - todayStats.correct - (todayStats.wrong || 0)) : 0}</span>
            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginLeft: '4px' }}>Skipped</span>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="tabs animate-fade-in-up stagger-3" style={{ marginTop: 'var(--space-lg)' }}>
        {['overview', 'subjects', 'weak', 'strong'].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && '📈 Overview'}
            {tab === 'subjects' && '📚 Subjects'}
            {tab === 'weak' && '⚠️ Weak Areas'}
            {tab === 'strong' && '💪 Strong Areas'}
          </button>
        ))}
      </div>

      {/* ── Tab Content ── */}
      <div className="animate-fade-in-up" style={{ marginTop: 'var(--space-lg)' }}>
        {activeTab === 'overview' && (
          <>
            {/* Activity Heatmap */}
            <div className="glass-card">
              <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>📅 Activity (Last 28 Days)</h3>
              <div className="streak-calendar">
                {Array.from({ length: 28 }).map((_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - (27 - i));
                  const dateStr = date.toISOString().split('T')[0];
                  const dayData = streakDays.find(d => d.date === dateStr);
                  const intensity = dayData ? Math.min(dayData.questions / 10, 1) : 0;
                  const isToday = i === 27;
                  return (
                    <div
                      key={i}
                      className={`streak-day ${isToday ? 'streak-day--today' : ''}`}
                      style={{
                        background: intensity > 0
                          ? `hsl(142, 71%, ${70 - intensity * 40}%)`
                          : 'var(--bg-secondary)',
                        opacity: intensity > 0 ? 0.5 + intensity * 0.5 : 0.3,
                      }}
                      title={`${dateStr}: ${dayData?.questions || 0} questions`}
                    >
                      <span className="streak-day__label">{date.getDate()}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Time Spent */}
            <div className="glass-card" style={{ marginTop: 'var(--space-md)' }}>
              <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>⏱️ Summary</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--space-md)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {mounted ? Math.round(overall.totalQuestions * 1.2) : 0}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Minutes Studied</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>
                    {mounted ? Math.round(overall.totalQuestions * (overall.accuracy / 100)) : 0}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Correct Answers</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--warning)' }}>
                    {overall.topicsMastered}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Topics Covered</div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'subjects' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {Object.entries(syllabus).map(([subKey, subject]) => {
              const sData = mounted ? (subjectData[subKey] || { questions: 0, correct: 0, chapters: 0 }) : { questions: 0, correct: 0, chapters: 0 };
              const totalChapters = subject.chapters.length;
              const acc = sData.questions > 0 ? Math.round((sData.correct / sData.questions) * 100) : 0;
              const subMeta = subjectMeta[subKey] || { icon: '📚', color: 'var(--primary)' };
              return (
                <Link key={subKey} href={`/subject/${subKey}`} className="glass-card" style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                      <span style={{ fontSize: '2rem' }}>{subMeta.icon}</span>
                      <div>
                        <h4 style={{ fontWeight: 700 }}>{subject.name}</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                          {totalChapters} chapters · {sData.questions} solved · {acc}% accuracy
                        </p>
                      </div>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>→</span>
                  </div>
                  <ProgressBar
                    progress={totalChapters > 0 ? (sData.chapters / totalChapters) * 100 : 0}
                    color={meta.color}
                    style={{ marginTop: 'var(--space-sm)' }}
                  />
                </Link>
              );
            })}
          </div>
        )}

        {activeTab === 'weak' && (
          <div className="glass-card">
            <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>⚠️ Topics Needing Improvement</h3>
            {!mounted || weakTopics.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-xl)', color: 'var(--text-tertiary)' }}>
                <span style={{ fontSize: '2rem' }}>🎉</span>
                <p style={{ marginTop: 'var(--space-sm)' }}>No weak topics yet! Start practicing to get insights.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {weakTopics.map((t) => (
                  <Link key={t.id} href={`/practice?topics=${t.id}`} className="list-item list-item--hover">
                    <div>
                      <span style={{ fontWeight: 600 }}>{t.name}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--error)', marginLeft: '8px' }}>{t.accuracy}% accuracy</span>
                    </div>
                    <span className="btn btn--sm btn--outline">Practice →</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'strong' && (
          <div className="glass-card">
            <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>💪 Mastered Topics</h3>
            {!mounted || strongTopics.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-xl)', color: 'var(--text-tertiary)' }}>
                <span style={{ fontSize: '2rem' }}>📚</span>
                <p style={{ marginTop: 'var(--space-sm)' }}>Practice more to build your mastery!</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {strongTopics.map((t) => (
                  <div key={t.id} className="list-item">
                    <div>
                      <span style={{ fontWeight: 600 }}>{t.name}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--success)', marginLeft: '8px' }}>✅ {t.accuracy}% accuracy</span>
                    </div>
                    <span style={{ color: 'var(--success)' }}>🏆</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}
