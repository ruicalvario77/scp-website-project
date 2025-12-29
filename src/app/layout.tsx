// src/app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Configure Google Font (DM Sans) with necessary weights
const dmSans = DM_Sans({
  weight: ['100', '200', '300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});


// Configure local font (TT Ramillas)
const ttRamillas = localFont({
  src: [
    {
      path: './fonts/tt_ramillas_light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/tt_ramillas_light-webfont.woff',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
});

// Metadata for SEO purposes
export const metadata: Metadata = {
  title: 'SCP Resource Finance',
  description: 'Specialized capital, advisory and investment services for mid-market mining companies',
};

// Root layout component that wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' utility class enables the smooth "Back to Top" button behavior
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${ttRamillas.variable} antialiased overflow-x-hidden`}>
        <Navbar /> 
        <main>{children}</main> {/* Wrap dynamic content in a semantic main tag */}
        <Footer /> 
      </body>
    </html>
  );
}
