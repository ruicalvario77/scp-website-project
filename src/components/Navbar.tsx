'use client'; 

import { useState } from 'react';
import { ChevronRight } from 'lucide-react'; 
import { motion, Variants } from 'framer-motion';
import MobileMenu from './MobileMenu'; 
import CustomHamburger from './CustomHamburger';

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

  /**
   * Orchestrates a "seamless loop" effect where the icon exits right 
   * and reappears from the left. The 4% keyframe window minimizes 
   * visual artifacting during the position reset.
   */
  const chevronVariants: Variants = {
    initial: { x: 0, opacity: 1 },
    hover: {
      x: [0, 30, -30, 0],
      opacity: [1, 0, 0, 1],
      transition: { 
        duration: 1.2, 
        times: [0, 0.48, 0.52, 1], 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <nav className="sticky top-0 z-100 h-26.5 bg-white/40 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl flex justify-between items-center h-full px-4 md:px-0">

        {/* Primary Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-12 items-center">
          {navItems.map((item) => (
            <motion.a 
              key={item.name} 
              href={item.href} 
              whileHover={{ y: -3 }}
              className="text-nav-title text-brand-navy hover:text-brand-gold transition-colors inline-block border-none outline-none focus:outline-none"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
          
        {/* Auth CTA with high-emphasis micro-interaction */}
        <motion.button 
          whileHover="hover"
          initial="initial"
          className="hidden md:flex items-center space-x-2 border border-brand-gold text-brand-navy rounded-full pl-6 pr-2 py-2 text-nav-title hover:bg-brand-gold hover:text-white transition-colors group cursor-pointer focus:outline-none"
        >
          <span>LOGIN</span>
          <span className="bg-brand-gold p-2 rounded-full group-hover:bg-white transition-colors overflow-hidden relative w-8 h-8 flex items-center justify-center">
            <motion.div variants={chevronVariants}>
              <ChevronRight className="w-4 h-4 text-white group-hover:text-brand-gold" />
            </motion.div>
          </span>
        </motion.button>

        {/* Mobile-only Header & Toggle */}
        <div className="flex items-center justify-between w-full md:hidden">
            <img src="/scp-logo-nav.svg" alt="SCP Resource Finance Logo" className="h-8" />
            <button onClick={() => setIsMenuOpen(true)} className="p-2 focus:outline-none">
                <CustomHamburger />
            </button>
        </div>
      </div>
      
      {/* Off-canvas mobile navigation overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navItems={navItems} />
    </nav>
  );
}
