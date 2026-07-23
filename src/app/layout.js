import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import { DataProvider } from '@/context/DataContext';
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';

export const metadata = {
  title: 'NEET Mastery — Master NCERT, One Topic at a Time',
  description: 'Practice NEET questions with confidence learning mode. Topic-wise practice following exact NCERT hierarchy. Build confidence, track progress, and master every concept.',
  keywords: ['NEET', 'NCERT', 'Biology', 'Physics', 'Chemistry', 'Practice', 'MCQ', 'Medical Entrance'],
  openGraph: {
    title: 'NEET Mastery',
    description: 'The smartest way to prepare for NEET — practice by NCERT micro-topics.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <DataProvider>
              <Navbar />
              <main className="main-content">{children}</main>
              <BottomNav />
            </DataProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
