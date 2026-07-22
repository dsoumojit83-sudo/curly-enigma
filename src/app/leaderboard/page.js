'use client';

import { useState, useEffect } from 'react';
import { getOverallStats } from '@/lib/storage';

// Simulated leaderboard data (would come from Supabase in production)
const mockLeaders = [
  { rank: 1, name: 'Priya Sharma', avatar: '👩‍🔬', score: 4520, streak: 45, accuracy: 92 },
  { rank: 2, name: 'Rahul Verma', avatar: '👨‍⚕️', score: 4310, streak: 38, accuracy: 88 },
  { rank: 3, name: 'Ananya Patel', avatar: '👩‍💻', score: 4180, streak: 42, accuracy: 90 },
  { rank: 4, name: 'Vikram Singh', avatar: '👨‍🎓', score: 3950, streak: 30, accuracy: 85 },
  { rank: 5, name: 'Sneha Gupta', avatar: '👩‍🎓', score: 3780, streak: 28, accuracy: 87 },
  { rank: 6, name: 'Arjun Kumar', avatar: '👨‍🔬', score: 3640, streak: 25, accuracy: 83 },
  { rank: 7, name: 'Kavya Reddy', avatar: '👩‍⚕️', score: 3520, streak: 22, accuracy: 81 },
  { rank: 8, name: 'Rohan Joshi', avatar: '🧑‍🔬', score: 3390, streak: 20, accuracy: 79 },
  { rank: 9, name: 'Meera Iyer', avatar: '👩‍🏫', score: 3210, streak: 18, accuracy: 78 },
  { rank: 10, name: 'Aditya Nair', avatar: '👨‍💼', score: 3050, streak: 15, accuracy: 76 },
];

export default function LeaderboardPage() {
  const [stats, setStats] = useState({ totalQuestions: 0, accuracy: 0, streak: 0 });
  const [tab, setTab] = useState('weekly');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStats(getOverallStats());
  }, []);

  const userScore = mounted ? stats.totalQuestions * 4 : 0;
  const userRank = mockLeaders.filter(l => l.score > userScore).length + 1;

  const medalEmoji = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>🏆 Leaderboard</h1>
        <p>See how you compare with other NEET aspirants.</p>
      </div>

      {/* Your Rank Card */}
      <div className="glass-card gradient-border animate-fade-in-up stagger-1" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>
          {userRank <= 3 ? medalEmoji(userRank) : '🎯'}
        </div>
        <h3 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Your Rank: #{userRank}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Score: {userScore} pts · {stats.accuracy}% accuracy · 🔥 {stats.streak} day streak
        </p>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginTop: 'var(--space-xs)' }}>
          💡 Keep practicing to climb the leaderboard!
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs animate-fade-in-up stagger-2" style={{ marginTop: 'var(--space-lg)' }}>
        {['weekly', 'monthly', 'alltime'].map(t => (
          <button key={t} className={`tab ${tab === t ? 'tab--active' : ''}`} onClick={() => setTab(t)}>
            {t === 'weekly' && '📅 This Week'}
            {t === 'monthly' && '📆 This Month'}
            {t === 'alltime' && '🏆 All Time'}
          </button>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="glass-card animate-fade-in-up stagger-3" style={{ marginTop: 'var(--space-md)', padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left' }}>Rank</th>
                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left' }}>Student</th>
                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center' }}>Score</th>
                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center' }}>🔥 Streak</th>
                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center' }}>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {mockLeaders.map((leader) => (
                <tr key={leader.rank} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: 'var(--space-sm) var(--space-md)', fontWeight: 700 }}>
                    {medalEmoji(leader.rank)}
                  </td>
                  <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                      <span style={{ fontSize: '1.3rem' }}>{leader.avatar}</span>
                      <span style={{ fontWeight: 600 }}>{leader.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center', fontWeight: 600, color: 'var(--primary)' }}>
                    {leader.score}
                  </td>
                  <td style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center' }}>
                    {leader.streak} days
                  </td>
                  <td style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center' }}>
                    <span style={{ color: leader.accuracy >= 85 ? 'var(--success)' : 'var(--warning)' }}>
                      {leader.accuracy}%
                    </span>
                  </td>
                </tr>
              ))}
              {/* Your row */}
              <tr style={{ background: 'var(--primary)08', borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: 'var(--space-sm) var(--space-md)', fontWeight: 700 }}>
                  #{userRank}
                </td>
                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ fontSize: '1.3rem' }}>👤</span>
                    <span style={{ fontWeight: 700, color: 'var(--primary)' }}>You</span>
                  </div>
                </td>
                <td style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center', fontWeight: 700, color: 'var(--primary)' }}>
                  {userScore}
                </td>
                <td style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center' }}>
                  {stats.streak} days
                </td>
                <td style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'center', color: 'var(--primary)', fontWeight: 600 }}>
                  {stats.accuracy}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass-card animate-fade-in-up" style={{ marginTop: 'var(--space-md)', textAlign: 'center', padding: 'var(--space-lg)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
          🔒 Connect with Supabase to sync your score and compete with real students nationwide!
        </p>
      </div>

      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}
