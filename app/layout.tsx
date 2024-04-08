import { cn } from '@/app/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '../styles/globals.css';
import Sidenav from './components/sidenav';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Unletterboxd',
  description: 'Letterboxd competitor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="flex">
          <Sidenav />
          {children}
        </div>
      </body>
    </html>
  );
}
