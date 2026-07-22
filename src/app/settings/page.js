'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import { getSettings, updateSettings, getProfile, setProfile, getOverallStats, getMode, setMode } from '@/lib/storage';

export default function SettingsPage() {
  const { user, isGuest, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [settings, setSettingsState] = useState({ dailyGoal: 30, notifications: true, sound: true, difficulty: 'mixed' });
  const [profile, setProfileState] = useState({ name: 'Guest', email: '' });
  const [mode, setModeState] = useState('neet');
  const [stats, setStats] = useState({ totalQuestions: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSettingsState(getSettings());
    setProfileState(getProfile());
    setStats(getOverallStats());
    setModeState(getMode());
  }, []);

  const handleSettingChange = (key, value) => {
    const updated = { ...settings, [key]: value };
    setSettingsState(updated);
    updateSettings({ [key]: value });
  };

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setModeState(newMode);
    setMode(newMode);
    window.location.reload(); // Reload to refresh contexts and layout correctly
  };

  const handleClearData = () => {
    if (confirm('Are you sure? This will delete ALL your progress, bookmarks, notes, and settings. This cannot be undone.')) {
      if (confirm('Really? Type thinking... This will erase everything.')) {
        Object.keys(localStorage).forEach(key => {
          if (key.startsWith('neetmastery_')) localStorage.removeItem(key);
        });
        window.location.reload();
      }
    }
  };

  return (
    <div className="container">
      <div className="page-header animate-fade-in-up">
        <h1>⚙️ Settings</h1>
        <p>Customize your NEET Mastery experience.</p>
      </div>

      {/* Profile */}
      <div className="glass-card animate-fade-in-up stagger-1">
        <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>👤 Profile</h3>
        {isGuest ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '2.5rem' }}>👤</div>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontWeight: 600 }}>Guest User</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                Sign in to sync progress across devices and appear on the leaderboard.
              </p>
            </div>
            <Link href="/login" className="btn btn--primary">Sign In</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '2.5rem' }}>👨‍🎓</div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontWeight: 600 }}>{user?.user_metadata?.full_name || profile.name}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>{user?.email}</p>
            </div>
            <button className="btn btn--outline" onClick={signOut}>Sign Out</button>
          </div>
        )}
      </div>

      {/* Appearance */}
      <div className="glass-card animate-fade-in-up stagger-2" style={{ marginTop: 'var(--space-md)' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>Appearance & Settings</h3>
        <div className="settings-row" style={{ marginBottom: 'var(--space-md)' }}>
          <div>
            <span style={{ fontWeight: 600 }}>Dark Mode</span>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Switch between light and dark themes</p>
          </div>
          <button
            className={`toggle-switch ${theme === 'dark' ? 'toggle-switch--active' : ''}`}
            onClick={toggleTheme}
            id="theme-toggle-settings"
          >
            <span className="toggle-switch__knob" />
          </button>
        </div>

        {/* Difficulty Preference */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
          <div>
            <h4 style={{ fontWeight: 600 }}>Default Difficulty</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>For random practice sessions.</p>
          </div>
          <select 
            className="input" 
            style={{ width: '120px' }}
            value={settings.difficulty || 'mixed'}
            onChange={(e) => handleSettingChange('difficulty', e.target.value)}
          >
            <option value="mixed">Mixed</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Exam Mode Preference */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontWeight: 600 }}>Exam Mode</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Changes syllabus structure (NEET vs JEE).</p>
          </div>
          <select 
            className="input" 
            style={{ width: '120px' }}
            value={mode}
            onChange={handleModeChange}
          >
            <option value="neet">NEET</option>
            <option value="jee">JEE Main/Adv</option>
          </select>
        </div>
      </div>

      {/* Study Preferences */}
      <div className="glass-card animate-fade-in-up stagger-3" style={{ marginTop: 'var(--space-md)' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>📚 Study Preferences</h3>

        <div className="settings-row">
          <div>
            <span style={{ fontWeight: 600 }}>Daily Goal</span>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Questions per day target</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
            {[10, 20, 30, 50, 100].map(g => (
              <button
                key={g}
                className={`btn btn--sm ${settings.dailyGoal === g ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => handleSettingChange('dailyGoal', g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-row" style={{ marginTop: 'var(--space-md)' }}>
          <div>
            <span style={{ fontWeight: 600 }}>Default Difficulty</span>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Preferred question difficulty</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
            {['easy', 'medium', 'hard', 'mixed'].map(d => (
              <button
                key={d}
                className={`btn btn--sm ${settings.difficulty === d ? 'btn--primary' : 'btn--outline'}`}
                onClick={() => handleSettingChange('difficulty', d)}
                style={{ textTransform: 'capitalize' }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="glass-card animate-fade-in-up stagger-4" style={{ marginTop: 'var(--space-md)' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>📊 Quick Stats</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--space-md)', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{mounted ? stats.totalQuestions : 0}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Questions Solved</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success)' }}>{mounted ? stats.accuracy : 0}%</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Overall Accuracy</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--warning)' }}>{mounted ? stats.streak : 0}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Day Streak</div>
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--info)' }}>{mounted ? stats.topicsMastered : 0}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Topics Mastered</div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="glass-card animate-fade-in-up stagger-5" style={{ marginTop: 'var(--space-md)' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 'var(--space-md)' }}>🔗 Quick Links</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
          {[
            { href: '/revision', icon: '📅', label: 'Revision Scheduler' },
            { href: '/bookmarks', icon: '🔖', label: 'Bookmarks' },
            { href: '/leaderboard', icon: '🏆', label: 'Leaderboard' },
            { href: '/ai-tutor', icon: '🤖', label: 'AI Tutor' },
          ].map(link => (
            <Link key={link.href} href={link.href} className="list-item list-item--hover">
              <span>{link.icon} {link.label}</span>
              <span>→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass-card animate-fade-in-up" style={{ marginTop: 'var(--space-md)', borderColor: 'var(--error)' }}>
        <h3 style={{ fontWeight: 700, color: 'var(--error)', marginBottom: 'var(--space-md)' }}>⚠️ Danger Zone</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
          Clear all stored data including progress, bookmarks, notes, and settings. This action cannot be undone.
        </p>
        <button className="btn btn--sm" style={{ background: 'var(--error)', color: '#fff' }} onClick={handleClearData} id="clear-data-btn">
          🗑️ Clear All Data
        </button>
      </div>

      {/* Version */}
      <div style={{ textAlign: 'center', padding: 'var(--space-xl)', color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>
        <p>NEET Mastery v1.0.0</p>
        <p>Built with ❤️ for NEET aspirants</p>
      </div>

      <div style={{ height: 'var(--space-2xl)' }} />
    </div>
  );
}
