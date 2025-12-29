// src/components/blocks/TransactionsBlock.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface StatItem {
  val: string;
  label: string;
}

interface TransactionsBlockProps {
  /**
   * statRefs is an array of 3 refs passed from page.tsx 
   * to anchor the start of the animated path for the GlobalScrollLine.
   */
  statRefs?: React.RefObject<HTMLDivElement | null>[];
}

// 1. Bottom-up text reveal variants (Consistent with AboutBlock)
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

const TransactionsBlock: React.FC<TransactionsBlockProps> = ({ statRefs }) => {
  const statsData: StatItem[] = [
    { val: "380+", label: "TRANSACTIONS" },
    { val: ">$7bn", label: "CAPITAL RAISED" },
    { val: ">$4.7bn", label: "M&A ADVISORY" }
  ];

  const customCardRadius = "100px";

  return (
    <section className="relative bg-brand-cloud z-10">
      
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-block-bg.svg" 
          alt="Background" 
          fill 
          className="object-cover mix-blend-multiply opacity-45"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-40 md:py-64">

        <div className="grid md:grid-cols-5 gap-8 mb-20 md:mb-32 relative">
          
          {/* LEFT COLUMN: Animated Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textRevealVariant}
            className="md:col-span-3 flex flex-col justify-end items-end text-right pr-8"
          >
             <p className="text-section-title text-primary mb-6">TRANSACTIONS</p>
             <h1 className="text-primary mt-0"> 
              <span className="text-accent">Proven track.</span> Trusted partner.
            </h1>
            
            <motion.p 
              variants={textRevealVariant}
              transition={{ delay: 0.2 }}
              className="text-section-p text-primary mt-24 text-right" 
              id="description-paragraph"
            > 
              Our mission is to be a long-term, trusted partner to corporates and investors immersed in the resources value chain by providing expert guidance, superior returns, and exceptional service. We invest alongside our clients.
            </motion.p>
          </motion.div> 

          {/* RIGHT COLUMN: Dark Card */}
          <div className="hidden md:block md:col-span-2 relative h-full">
            <div className="absolute bottom-30 right-[-16px] lg:right-[-32px] w-[350px] md:w-[450px] top-[-400px] z-30">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textRevealVariant}
                  transition={{ delay: 0.4 }}
                  className="relative bg-primary text-white shadow-2xl overflow-hidden h-full flex flex-col"
                  style={{ borderRadius: customCardRadius }}
                >
                    <div className="absolute inset-0 opacity-60 pointer-events-none">
                        <Image src="/about-bg.svg" alt="Background texture" fill className="object-cover" />
                    </div>

                    <div className="absolute top-0 left-0 w-3/4 h-3/4 pointer-events-none opacity-90">
                        <Image
                            src="/scp-section-4-element-contour-lines.svg"
                            alt="Decorative gold lines"
                            fill
                            className="object-contain object-left"
                        />
                    </div>

                    <div className="relative p-16 flex flex-col flex-grow justify-end items-center"> 
                        <Link href="/transactions" className="group">
                            <motion.div 
                                initial="initial"
                                whileHover="hover"
                                className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent transition-colors duration-300 cursor-pointer"
                            >
                                <span className="text-nav-title text-white pl-7 pr-4 whitespace-nowrap">Recent transactions</span>
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
          </div>
        </div>

        {/* STATS SECTION: statRefs attached to each stat column */}
        <div className="relative mt-32 md:mt-48 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left">
            {statsData.map((stat: StatItem, i: number) => (
              <motion.div 
                key={i} 
                // Attach the ref here so GlobalScrollLine can find the start/turn points
                ref={statRefs?.[i]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textRevealVariant}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="relative"
              >
                <p className="font-serif font-light text-7xl md:text-[100px] leading-[56px] text-brand-blue">{stat.val}</p>
                <p className="text-section-title text-brand-grey-sky mt-6 md:mt-10">{stat.label}</p>
                <div className='absolute bottom-[-77px] left-0 transform translate-y-1/2 z-10'>
                   <Image src="/scp-section-2-accent-line.svg" alt="Divider graphic" width={50} height={2} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TransactionsBlock;
