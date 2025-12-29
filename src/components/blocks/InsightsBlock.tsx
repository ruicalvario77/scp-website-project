// src/components/blocks/InsightsBlock.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; 
import { motion, Variants, useScroll, useSpring } from 'framer-motion';

interface InsightArticle {
  id: string | number;
  title: string;
  description: string;
  linkUrl: string;
}

interface InsightsBlockProps {
  heading?: string;
  accentHeading?: string;
  articles?: InsightArticle[]; 
  /** 
   * Used to connect the animated scroll line coming from the Transactions section 
   */
  anchorRef?: React.RefObject<HTMLDivElement | null>;
}

// --- Animation Variants ---

const textRevealVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
};

const chevronVariants: Variants = {
  initial: { x: 0, opacity: 1 },
  hover: {
    // Creates a "looping" arrow effect on hover
    x: [0, 30, -30, 0],
    opacity: [1, 0, 0, 1],
    transition: { duration: 1.2, times: [0, 0.48, 0.52, 1], ease: "easeInOut" }
  }
};

// --- Sub-components ---

/**
 * Animated horizontal line that fills up as the user scrolls into the article
 */
const LineDrawer = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center center"] 
    });
    
    const scaleX = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    return (
        <div ref={ref} className='relative py-6 flex justify-start'> 
            <div className='relative w-1/2 h-px'>
                <motion.div 
                    className="absolute inset-0 bg-brand-blue opacity-40" 
                    style={{ scaleX, originX: 'left' }} 
                />
                <Image 
                    src="/scp-section-2-accent-line.svg" 
                    alt="Divider graphic" 
                    width={50} 
                    height={2} 
                    className='absolute top-1/2 left-0 -translate-y-1/2 z-10' 
                />
            </div>
        </div>
    );
};

const InsightsBlock = ({ 
  heading = "opportunity", 
  accentHeading = "Unearthing",
  articles,
  anchorRef 
}: InsightsBlockProps) => {

  const defaultArticles: InsightArticle[] = [
    { id: 1, title: 'An examination of Gold’s 2024 prospects.', description: 'Lorem ipsum dolor sit amet...', linkUrl: '#' },
    { id: 2, title: 'State of the Gold and Minerals Trade...', description: 'Lorem ipsum dolor sit amet...', linkUrl: '#' },
    { id: 3, title: 'Fed Cred - An analysis of recent Federal Reserve policy...', description: 'Lorem ipsum dolor sit amet...', linkUrl: '#' },
  ];

  const displayArticles = articles || defaultArticles;

  return (
    <section className="relative bg-white z-10 overflow-hidden border-t border-brand-light-blue/30">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Sticky Header Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariant}
            className="md:w-[40%] flex flex-col items-center md:items-end text-center md:text-right md:sticky md:top-32 h-fit z-20"
          >
            {/* anchorRef marks the end point for the global scroll line */}
            <p ref={anchorRef} className="text-section-title text-brand-navy">INSIGHTS</p>
            
            <h1 className="text-brand-navy mt-8"> 
              <span className="text-accent">{accentHeading}</span> <br /> {heading}
            </h1>

            <div className="mt-12 md:mt-16"> 
                <Link href="/insights" className="group">
                    <motion.div 
                        initial="initial"
                        whileHover="hover"
                        className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent hover:bg-accent transition-colors duration-300"
                    >
                        <span className="text-nav-title text-brand-navy group-hover:text-white pl-7 pr-4 transition-colors">See all insights</span>
                        <span className="flex items-center justify-center w-10 h-10 bg-accent rounded-full group-hover:bg-white transition-colors overflow-hidden relative">
                            <motion.div variants={chevronVariants}>
                                <ChevronRight className="w-4 h-4 text-white group-hover:text-brand-gold" />
                            </motion.div>
                        </span>
                    </motion.div>
                </Link>
            </div>
          </motion.div>
          
          {/* Article List Column */}
          <div className="md:w-[60%] md:pl-24 lg:pl-40 md:pt-44 z-20">
            <div className="flex flex-col gap-16 md:gap-24">
              {displayArticles.map((article, i) => (
                <motion.div 
                    key={article.id} 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={textRevealVariant}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                >
                    <Link href={article.linkUrl} className="block">
                        <h3 className="text-brand-blue group-hover:text-brand-navy transition-colors duration-500 font-dm font-bold text-[24px] leading-8 tracking-normal">
                            {article.title}
                        </h3>
                        
                        <LineDrawer />

                        <p className="font-dm font-normal text-[18px] leading-6 tracking-normal text-slate-600 mb-6 max-w-lg">
                            {article.description}
                        </p>
                        
                        <div className="inline-flex items-center gap-2 btn-small text-accent font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                            <span>Read more</span>
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute -bottom-20 -left-20 w-175 md:w-250 aspect-square opacity-20 pointer-events-none select-none z-0">
        <Image 
            src="/scp-section-4-element-contour-lines.svg" 
            alt="" 
            fill
            className='object-contain object-[left_bottom] animate-contour-drift'
        />
      </div>
    </section>
  );
};

export default InsightsBlock;
