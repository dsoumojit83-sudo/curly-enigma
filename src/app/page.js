import Link from 'next/link';
import HomeInteractive from '@/components/home/HomeInteractive';

const allSubjects = [
  { id: 'biology', name: 'Biology', icon: '🧬', color: 'var(--biology)', chapters: 35, desc: 'Class 11 + 12 NCERT', href: '/subject/biology', mode: 'neet' },
  { id: 'physics', name: 'Physics', icon: '⚛️', color: 'var(--physics)', chapters: 29, desc: 'Class 11 + 12', href: '/subject/physics', mode: 'both' },
  { id: 'chemistry', name: 'Chemistry', icon: '⚗️', color: 'var(--chemistry)', chapters: 28, desc: 'Class 11 + 12', href: '/subject/chemistry', mode: 'both' },
  { id: 'mathematics', name: 'Mathematics', icon: '📐', color: 'var(--physics)', chapters: 30, desc: 'Class 11 + 12', href: '/subject/mathematics', mode: 'jee' },
];

const features = [
  { icon: '🃏', name: 'Flashcards', desc: 'Quick revision with flip cards', href: '/flashcards' },
  { icon: '📋', name: 'Mock Test', desc: 'Full-length timed practice', href: '/mock-test' },
  { icon: '📅', name: 'Revision', desc: 'Spaced repetition scheduler', href: '/revision' },
  { icon: '🤖', name: 'AI Tutor', desc: 'Ask doubts, get explanations', href: '/ai-tutor' },
  { icon: '🔖', name: 'Bookmarks', desc: 'Saved questions for later', href: '/bookmarks' },
  { icon: '🏆', name: 'Leaderboard', desc: 'See how you rank', href: '/leaderboard' },
];

export default function HomePage() {
  return (
    <div className="container">
      {/* ── Hero ── */}
      <section className="hero animate-fade-in-up" id="hero-section">
        <div className="hero__badge">🎓 NEET 2025 Ready</div>
        <h1 className="hero__title">
          Master NCERT,<br />
          <span className="hero__title--gradient">One Topic at a Time</span>
        </h1>
        <p className="hero__subtitle">
          Practice only what you&apos;ve studied. Build confidence with topic-wise questions
          following the exact NCERT hierarchy.
        </p>
        <div className="hero__actions">
          <Link href="/subject/biology" className="btn btn--primary btn--lg" id="start-btn">
            🚀 Start Practicing
          </Link>
          <Link href="/dashboard" className="btn btn--outline btn--lg" id="dashboard-btn">
            📊 My Dashboard
          </Link>
        </div>
      </section>

      <HomeInteractive allSubjects={allSubjects} features={features} />
    </div>
  );
}
