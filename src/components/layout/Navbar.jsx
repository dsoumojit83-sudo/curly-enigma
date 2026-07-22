'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import SearchModal from '@/components/layout/SearchModal';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/flashcards', label: 'Flashcards' },
  { href: '/bookmarks', label: 'Bookmarks' },
  { href: '/mock-test', label: 'Mock Test' },
  { href: '/leaderboard', label: 'Leaderboard' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="navbar glass" id="main-navbar">
        <div className="navbar__inner container">
          <Link href="/" className="navbar__logo" id="logo">
            <span className="navbar__logo-icon">🧬</span>
            <span className="navbar__logo-text">NEET Mastery</span>
          </Link>

          <nav className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`} id="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar__link ${pathname === link.href ? 'navbar__link--active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              className="navbar__search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              id="search-btn"
            >
              🔍
            </button>
            <ThemeToggle />
            <Link href="/settings" className="navbar__avatar" id="user-avatar" title="Settings">
              👤
            </Link>
            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              id="hamburger-btn"
            >
              <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`} />
              <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`} />
              <span className={`navbar__hamburger-line ${mobileOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>
      </header>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
