import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'krish-os',
  description: 'A modern portfolio shell for Krish.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
