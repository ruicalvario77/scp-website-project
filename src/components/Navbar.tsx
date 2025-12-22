// src/components/Navbar.tsx (Updated)
'use client'; 

import { useState } from 'react';
import { ChevronRight } from 'lucide-react'; 
import MobileMenu from './MobileMenu'; 
import CustomHamburger from './CustomHamburger'; // Import custom icon

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Transactions', href: '#transactions' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
    { name: 'Disclosures', href: '#disclosures' },
  ];

  return (
    <nav className="sticky top-0 z-20 h-26.5 bg-white/40 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex justify-between items-center h-full px-4 md:px-0">

        {/* Desktop Menu (Visible only on medium screens and up) */}
        <div className="hidden md:flex space-x-12 items-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-nav-title text-brand-navy hover:text-brand-gold transition-colors">
              {item.name}
            </a>
          ))}
        </div>
          
        {/* Custom Login Button (Always visible on desktop, hidden on mobile) */}
        <button className="hidden md:flex items-center space-x-2 border border-brand-gold text-brand-navy rounded-full pl-6 pr-2 py-2 text-nav-title hover:bg-brand-gold hover:text-white transition-colors group cursor-pointer">
          <span>LOGIN</span>
          <span className="bg-brand-gold p-2 rounded-full group-hover:bg-white transition-colors">
            <ChevronRight className="w-4 h-4 text-white group-hover:text-brand-gold" />
          </span>
        </button>


        {/* Logo/Brand Name & Mobile Menu Button Wrapper for MOBILE ONLY */}
        <div className="flex items-center justify-between w-full md:hidden">
            {/* Logo image for the mobile view */}
            <img 
              src="/scp-logo-nav.svg" 
              alt="SCP Resource Finance Logo" 
              className="h-8" // Adjust height as needed
            />

            <button onClick={() => setIsMenuOpen(true)} className="p-2 focus:outline-none">
                {/* Use the custom gold hamburger icon */}
                <CustomHamburger />
            </button>
        </div>
      </div>
      
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navItems={navItems} />

    </nav>
  );
}
