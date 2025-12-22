// src/app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Imported
import Footer from '@/components/Footer'; // Imported

// Load DM Sans (Google Font) with required weights and styles
const dmSans = DM_Sans({
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Load TT Ramillas (custom local font) - files now in app/fonts/
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

export const metadata: Metadata = {
  title: 'SCP Resource Finance',
  description: 'Specialized capital, advisory and investment services for mid-market mining companies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${ttRamillas.variable} antialiased overflow-x-hidden`}>
        {/* ADDED NAVBAR HERE */}
        <Navbar /> 
        
        {/* The main page content goes here */}
        {children} 
        
        {/* ADDED FOOTER HERE */}
        <Footer /> 
      </body>
    </html>
  );
}
