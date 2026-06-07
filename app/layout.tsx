import type { Metadata } from 'next';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Premium Portfolio | Developer Showcase',
  description: 'A polished one-page developer portfolio showcasing experience, projects, skills, blogs, and contact.',
  metadataBase: new URL('https://your-portfolio.vercel.app'),
  openGraph: {
    title: 'Premium Portfolio | Developer Showcase',
    description: 'A polished one-page developer portfolio showcasing experience, projects, skills, blogs, and contact.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
