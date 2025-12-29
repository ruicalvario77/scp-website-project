import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface AboutBlockProps {
  // Array of 3 refs passed from the parent used for aligning a scroll line visualization.
  statRefs?: React.RefObject<HTMLDivElement | null>[];
}

// Animation config for text elements appearing from the bottom up.
const textRevealVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.47, 0.32, 0.98] 
    } 
  }
};

// Animation config for the sliding chevron effect in the CTA button.
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

const AboutBlock = ({ statRefs }: AboutBlockProps) => {
  const stats = [
    { val: "2017", label: "Founded" },
    { val: "100%", label: "Employee Owned" },
    { val: "CIRO", label: "Member" }
  ];

  return (
    <section className="relative bg-primary text-white overflow-hidden z-0">
      
      {/* Background image covering the whole section */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <Image src="/about-bg.svg" alt="Background texture" fill className="object-cover" priority />
      </div>

      {/* Decorative contour lines element (desktop only feature) */}
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none w-1/2 md:w-1/4 z-0">
         <div className="relative w-full h-full">
           {/* Fix 1: Use arbitrary value for pulse animation to resolve CSS conflict */}
           <div className="relative w-full h-full animate-contour-drift [animation:_pulse-slow_12s_ease-in-out_infinite]">
             <Image src="/scp-section-2-element-contour-lines.svg" alt="Decorative gold lines" fill className="object-contain object-left" />
           </div>
         </div>
      </div>

      {/* Main content container with max width and padding */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">

        {/* Introduction Section: Two-column grid on desktop */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible" // Triggers animation when section enters view
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariant}
            className="flex flex-col text-center md:text-right"
          >
            <p className="text-section-title text-white">ABOUT</p>
            <h1 className="text-white mt-10"> 
              <span className="text-accent">A resourceful</span> partner
            </h1>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariant}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }} 
            className="flex flex-col space-y-8 text-center md:text-left"
          >
            <p className="text-section-p text-white mt-10 md:mt-38"> 
              SCP is a global financial services firm focused on the metals and mining sector. We bring together technical expertise, astute capital, and strategic relationships to unearth opportunities to create meaningful value for our partners.
            </p>
          </motion.div>
        </div>

        {/* Key Statistics Section: Grid layout with custom dividers */}
        <div className="relative mt-24 md:mt-36 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"> 
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textRevealVariant}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative text-center md:text-left" 
                // Assigns a ref if provided from the parent component
                ref={statRefs && statRefs[i] ? statRefs[i] : null}
              >
                <p className="font-serif font-light text-7xl md:text-[100px] leading-14 text-brand-blue">
                  {stat.val}
                </p>
                <p className="text-section-title text-brand-grey-sky mt-6 md:mt-10">
                  {stat.label}
                </p>
                
                {/* Mobile-only divider graphic solution */}
                <div className="relative mt-12 md:hidden"> 
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 border-t border-brand-grey-sky/30 w-1/2"></div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                       <Image src="/scp-section-2-accent-line.svg" alt="Divider graphic" width={50} height={2} />
                    </div>
                </div>

                {/* Desktop-only divider graphic solution */}
                {/* Fix 2: Replaced arbitrary value with canonical class name */}
                <div className='absolute -bottom-19.25 left-0 transform translate-y-1/2 z-10 hidden md:block'>
                   <Image 
                     src="/scp-section-2-accent-line.svg" 
                     alt="Divider graphic" 
                     width={50} 
                     height={2} 
                   />
                </div>

              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to Action (CTA) Button Link */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textRevealVariant}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            <div className="md:col-start-3 flex justify-center md:justify-start mb-12"> 
                <Link href="/our-story" className="group">
                    <motion.div 
                        initial="initial"
                        whileHover="hover"
                        className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent transition-colors duration-300 cursor-pointer"
                    >
                        <span className="text-nav-title text-white pl-7 pr-4">Our story</span>
                        <span className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-full group-hover:bg-brand-gold transition-colors duration-300 overflow-hidden relative">
                            <motion.div variants={chevronVariants}>
                                <ChevronRight className="w-4 h-4 text-white" />
                            </motion.div>
                        </span>
                    </motion.div>
                </Link>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBlock;
