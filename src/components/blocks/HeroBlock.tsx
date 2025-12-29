'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';
import Image from 'next/image';

export default function HeroBlock() {
  // Utility function to scroll down exactly one viewport height
  const scrollToNextSection = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  // Animation config for "SCP": Staggered bottom-up fade-in effect
  const scpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, // Stagger delay based on index
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    })
  };

  // Animation config for "Resource Finance": Slide in from the left
  const wordmarkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 1.2, duration: 1, ease: "easeOut" } 
    }
  };

  // Animation config for the logo container: Animates from fixed-center to relative-left
  const logoLayout: Variants = {
    initial: { 
      position: "fixed", // Start fixed in the viewport center
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      scale: 1.8, // Starts larger
      zIndex: 50,
      opacity: 1,
    },
    animate: { 
      position: "relative", // Ends in normal document flow
      top: "0%", 
      left: "0%",
      x: "0%",
      y: "0%",
      scale: 1.5, // Final size
      transition: { 
        delay: 2.8, 
        duration: 1.5, 
        ease: [0.76, 0, 0.24, 1] 
      }
    }
  };

  // Animation config for main content: Staggered fade in after logo movement
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 3.8, duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  return (
    <section className="relative h-dvh -mt-26.5 overflow-hidden flex items-center bg-brand-cloud">
      {/* Background Layer (texture image) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-block-bg.svg" 
          alt="Background" 
          fill 
          className="object-cover mix-blend-multiply opacity-45"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 md:px-0 relative z-10 w-full flex flex-col justify-center h-full">
        
        {/* LOGO AREA (Desktop only) */}
        <div className="hidden sm:flex justify-start">
            <motion.div
                variants={logoLayout}
                initial="initial"
                animate="animate"
                layout
                className="flex items-center space-x-4 md:space-x-6 mb-12 md:mb-32 mt-12 md:mt-32 origin-center md:origin-left" 
            >
                {/* "SCP" Text elements */}
                <div className="flex">
                {["S", "C", "P"].map((char, i) => (
                    <motion.span
                    key={i}
                    custom={i}
                    variants={scpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-brand-gold font-ramillas font-light tracking-normal"
                    style={{ 
                        fontSize: 'clamp(3.125rem, 2.817vw + 2.465rem, 5rem)', 
                        lineHeight: '0.9' 
                    }}
                    >
                    {char}
                    </motion.span>
                ))}
                </div>

                {/* "Resource Finance" wordmark */}
                <motion.span
                variants={wordmarkVariants}
                initial="hidden"
                animate="visible"
                className="text-brand-navy font-dm font-extralight text-2xl md:text-3xl flex flex-col leading-tight uppercase tracking-[0.2em]"
                >
                <span className="block">Resource</span>
                <span className="block">Finance</span>
                </motion.span>
            </motion.div>
        </div>

        {/* MAIN CONTENT Area (Headline and Divider) */}
        <motion.div 
          variants={contentVariants} 
          initial="hidden" 
          animate="visible"
          className="text-center md:text-left"
        >
          {/* Gold Accent Line */}
          <div className="w-25 h-px bg-brand-gold mb-12 mx-auto md:mx-0"></div>
          
          {/* Hero Headline */}
          <h3 className="text-brand-navy w-full md:w-3/5 mb-24 mx-auto md:mx-0 px-12 md:px-0">
            We provide specialized capital, advisory and investment services to mid-market mining companies and their stakeholders.
          </h3>
          
        </motion.div>

        {/* Scroll Indicator Button (Positions using absolute positioning on mobile, relative on desktop) */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          onClick={scrollToNextSection}
          className="relative bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer 
                     size-8 bg-brand-blue rounded-full flex items-center justify-center 
                     transition-all duration-300 shadow-lg text-white hover:bg-brand-gold hover:-translate-y-1
                     animate-pulse md:relative md:left-0 md:bottom-10 md:transform-none" 
        >
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
