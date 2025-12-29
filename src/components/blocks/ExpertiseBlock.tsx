// src/components/blocks/ExpertiseBlock.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; 
import { motion, Variants, useScroll, useSpring } from 'framer-motion';

interface ExpertiseBlockProps {
  /**
   * anchorRef is passed from the parent page.tsx to mark the 
   * end point for the cross-section animated line.
   */
  anchorRef?: React.RefObject<HTMLDivElement | null>;
}

// Bottom-up text reveal variants
const textRevealVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

// Chevron sliding variants
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

const ExpertiseBlock = ({ anchorRef }: ExpertiseBlockProps) => {
  const expertiseAreas = [
    {
      title: (
        <>
          Investment <br /> banking
        </>
      ),
      description: 'Access public and private capital, with advisory services across M&A, strategic transactions, and corporate restructuring',
    },
    {
      title: (
        <>
          Research <br /> & strategy
        </>
      ),
      description: 'Leverage proprietary market, company, and commodity insights for improved strategic and investment decision-making',
    },
    {
      title: (
        <>
          Sales <br /> & trading
        </>
      ),
      description: 'Source liquidity and execute large volume trades efficiently at speed, with corporate hedging and currency strategies',
    },
  ];

  return (
    <section className="relative bg-white z-10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        {/* Top Section: Uses order utilities to control flow on mobile vs desktop */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 md:mb-32">
          
          {/* Right Column Content (Heading Group) - Appears first on mobile, second on desktop */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariant}
            // text-center for mobile, md:text-left for desktop (as requested by user)
            className="flex flex-col md:w-[60%] text-center md:text-left order-1 md:order-2"
          >
            <p ref={anchorRef} className="text-section-title text-slate-900 md:mt-16">EXPERTISE</p>
            
            <h1 className="text-slate-900 mt-10"> 
              <span className="text-accent">Elemental</span> <br className="md:hidden" /> solutions <br className="md:hidden" /> provider
            </h1>
          </motion.div>
          
          {/* Left Column Content (Paragraph) - Appears second on mobile, first on desktop */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariant}
            transition={{ delay: 0.2 }}
            // text-center for mobile, md:text-left for desktop (via custom utility)
            className="flex flex-col justify-end pr-10 md:w-[40%] text-center md:text-left order-2 md:order-1"
          >
            <p className="text-section-p text-slate-900">
              We enable growth in the resources ecosystem through a comprehensive and nimble offering backed by industry experts with unique cross-border perspectives.
            </p>
          </motion.div>
          
        </div>

        {/* Cards Section: Headings and Lines will be animated using variants */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, i) => (
              <div key={i} className="flex flex-col text-center md:text-left">
                
                <motion.h3 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={textRevealVariant}
                    className="text-brand-blue font-ramillas font-light text-[40px] leading-12"
                >
                    {area.title}
                </motion.h3>
                
                <LineDrawer />

                <motion.p 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={textRevealVariant}
                    transition={{ delay: 0.2 }}
                    className="text-body-copy text-slate-900"
                >
                    {area.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        
        {/* "Learn More" Button alignment: centered on mobile, left on desktop */}
        <div className="mt-20 md:mt-40 flex justify-center md:justify-start"> 
            <Link href="/expertise" className="group">
                <motion.div 
                    initial="initial"
                    whileHover="hover"
                    className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent hover:bg-accent transition-colors duration-300 cursor-pointer"
                >
                    <span className="text-nav-title text-slate-900 group-hover:text-white pl-7 pr-4 transition-colors duration-300">Learn more</span>
                    
                    <span className="flex items-center justify-center w-10 h-10 bg-accent rounded-full group-hover:bg-white transition-colors duration-300 overflow-hidden relative">
                        <motion.div variants={chevronVariants}>
                            <ChevronRight className="w-4 h-4 text-white group-hover:text-brand-gold" />
                        </motion.div>
                    </span>
                </motion.div>
            </Link>
        </div>

      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-px bg-brand-light-blue opacity-50"></div>

    </section>
  );
};


const LineDrawer = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center center"] 
    });
    
    const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    return (
        // flex justify-center on mobile, md:justify-start on desktop
        <div ref={ref} className='relative py-8 flex justify-center md:justify-start'> 
            
            <div className='relative w-[65%] h-0.5'>
                 
                {/* Desktop line drawing LTR (hidden on mobile) */}
                <motion.div 
                    className="absolute inset-0 bg-brand-light-blue opacity-50 hidden md:block" 
                    style={{ scaleX, originX: 'left' }} 
                />

                {/* Mobile line drawing center-out (hidden on desktop) */}
                <motion.div 
                    className="absolute inset-0 bg-brand-light-blue opacity-50 block md:hidden" 
                    style={{ scaleX, originX: 'center' }} 
                />

                {/* Accent image overlay */}
                <Image 
                    src="/scp-section-2-accent-line.svg" 
                    alt="Divider graphic" 
                    width={50} 
                    height={2} 
                    // Centered on mobile, left-aligned on desktop within its container
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-0 md:translate-x-0 z-10' 
                />
            </div>
        </div>
    );
};

export default ExpertiseBlock;
