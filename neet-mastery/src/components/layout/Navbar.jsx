'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <nav className="navbar" id="main-navbar">
      <Link href="/" className="navbar__logo">
        <span className="navbar__logo-icon">🎯</span>
        <span>NEET <span className="text-gradient">Mastery</span></span>
      </Link>

      <div className="navbar__search" id="search-bar">
        <span className="navbar__search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search chapters, topics, concepts, PYQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="global-search-input"
        />
      </div>

      <div className="navbar__actions">
        {/* Mobile search toggle */}
        <button
          className="btn btn--ghost btn--sm"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          style={{ display: 'none' }}
          id="mobile-search-btn"
        >
          🔍
        </button>

        <Link href="/dashboard" className="btn btn--ghost btn--sm" id="nav-dashboard">
          📊 Dashboard
        </Link>

        <ThemeToggle />

        <button className="btn btn--outline btn--sm" id="nav-login-btn">
          Sign In
        </button>
      </div>

      {/* Mobile search overlay */}
      {mobileSearchOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          padding: 'var(--space-md)',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div className="navbar__search" style={{ display: 'block', maxWidth: '100%', margin: 0 }}>
            <span className="navbar__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search chapters, topics, concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      )}
    </nav>
  );
}
