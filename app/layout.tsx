import { ThemeProvider } from '@/app/components/theme-provider';
import { cn } from '@/app/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import '../styles/globals.css';
import Header from './components/header';
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidenav />
          <Header />
          <div className="ml-64">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
