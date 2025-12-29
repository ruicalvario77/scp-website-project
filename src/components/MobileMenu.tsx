'use client';
import { X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface MobileMenuProps {
  /** Controls the visibility state of the off-canvas menu */
  isOpen: boolean;
  /** Callback function to close the menu */
  onClose: () => void;
  /** Array of navigation items to display within the menu */
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  /**
   * Orchestrates a "seamless loop" effect inherited from the primary Navbar component.
   * Ensures visual consistency for interactive elements across all views.
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
    // Manages mount/unmount animations for the modal overlay
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ x: '100%' }}
          // Custom spring transition for a natural slide-in/out motion
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-white z-50 flex flex-col h-screen"
        >
          {/* Header Bar: Contains branding and close control */}
          <div className="flex-none flex justify-between items-center p-6 border-b border-gray-200 h-26.5">
            <img src="/scp-logo-nav.svg" alt="Logo" className="h-8" />
            <button onClick={onClose} className="p-2 text-brand-navy focus:outline-none" aria-label="Close menu">
              <X size={24} /> 
            </button>
          </div>

          {/* Navigational Links Container: Utilizes flex-1 to occupy remaining viewport space, enabling internal scrolling if content overflows */}
          <div className="flex-1 overflow-y-auto p-6 bg-white divide-y divide-gray-100">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                // Automatically closes the menu when a link is selected
                onClick={onClose} 
                whileHover={{ x: 5 }}
                className="text-section-p text-brand-navy hover:text-brand-gold transition-colors block py-5 first:pt-0 last:pb-0 outline-none border-none"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Call-to-Action (CTA) Footer: Fixed position anchored to the bottom of the screen */}
          <div className="flex-none p-6 pt-4 pb-12 bg-white flex justify-center border-t border-gray-100">
            <motion.button 
              whileHover="hover"
              initial="initial"
              className="flex items-center space-x-2 border border-brand-gold text-brand-navy rounded-full pl-6 pr-2 py-2 text-nav-title hover:bg-brand-gold hover:text-white transition-colors group cursor-pointer focus:outline-none"
            >
              <span>LOGIN</span>
              <span className="bg-brand-gold p-2 rounded-full group-hover:bg-white transition-colors overflow-hidden relative w-8 h-8 flex items-center justify-center">
                <motion.div variants={chevronVariants}>
                  <ChevronRight className="w-4 h-4 text-white group-hover:text-brand-gold" />
                </motion.div>
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
