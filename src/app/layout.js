import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'NEET Mastery — Master NCERT Topics One at a Time',
  description:
    'NEET Mastery helps students practice questions according to the exact NCERT topic hierarchy. Build confidence by mastering only the concepts you have already studied.',
  keywords: [
    'NEET preparation',
    'NCERT practice',
    'NEET biology',
    'NEET physics',
    'NEET chemistry',
    'NEET PYQ',
    'topic wise practice',
    'NEET 2026',
  ],
  openGraph: {
    title: 'NEET Mastery — Master NCERT Topics One at a Time',
    description: 'Practice NEET questions in the exact NCERT topic order. Build confidence, not fear.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="page-wrapper">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
