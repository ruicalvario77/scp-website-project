'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';
import Image from 'next/image';

export default function HeroBlock() {
  const scrollToNextSection = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  // 1. "SCP" Gold letters: Staggered Bottom-to-Top fade in
  const scpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    })
  };

  // 2. "Resource Finance": Reveal from Left
  const wordmarkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 1.2, duration: 1, ease: "easeOut" } 
    }
  };

  // 3. Animation: Centered (Fixed Position) -> Relative Left (20% larger when settled)
  const logoLayout: Variants = {
    initial: { 
      position: "fixed", // Start with fixed positioning relative to viewport
      top: "50%",
      left: "50%",
      x: "-50%",
      y: "-50%",
      scale: 1.8, 
      zIndex: 50,
      opacity: 1, // Ensure it is visible from the start of the animation
    },
    animate: { 
      position: "relative", // End with relative positioning in the flow
      top: "0%", 
      left: "0%",
      x: "0%",
      y: "0%",
      scale: 1.5, // Final size is 20% larger than originally defined
      transition: { 
        delay: 2.8, 
        duration: 1.5, 
        ease: [0.76, 0, 0.24, 1] 
      }
    }
  };

  // 4. Content Reveal (Line, Text, Button)
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
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-block-bg.svg" 
          alt="Background" 
          fill 
          className="object-cover mix-blend-multiply opacity-45"
          priority
        />
      </div>

      {/* Main Content Container (max-w-7xl is ~1280px) */}
      <div className="mx-auto max-w-7xl px-4 md:px-0 relative z-10 w-full flex flex-col justify-center h-full">
        
        {/* LOGO AREA - Hidden on mobile screens (hidden on sm, flex on md and up) */}
        <div className="hidden sm:flex justify-start">
            <motion.div
                variants={logoLayout}
                initial="initial"
                animate="animate"
                layout
                className="flex items-center space-x-4 md:space-x-6 mb-12 md:mb-32 mt-12 md:mt-32 origin-center md:origin-left" 
            >
                {/* SCP Gold Text (Ramillas Font-Light from Global h1) */}
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

                {/* RESOURCE FINANCE (DM Sans Extralight, Uppercase, Navy) */}
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

        {/* MAIN CONTENT Area */}
        <motion.div 
          variants={contentVariants} 
          initial="hidden" 
          animate="visible"
          className="text-center md:text-left"
        >
          {/* Gold Accent Line */}
          <div className="w-25 h-px bg-brand-gold mb-12 mx-auto md:mx-0"></div>
          
          {/* Hero Headline (Using Global h3 Style) */}
          <h3 className="text-brand-navy w-full md:w-3/5 mb-24 mx-auto md:mx-0 px-12 md:px-0">
            We provide specialized capital, advisory and investment services to mid-market mining companies and their stakeholders.
          </h3>
          
        </motion.div>

        {/* Scroll Indicator Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          onClick={scrollToNextSection}
          // Positioning on mobile: absolute bottom-10 left-1/2 transform -translate-x-1/2
          // Positioning on desktop: md:relative md:bottom-10 md:left-0 md:transform-none
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
