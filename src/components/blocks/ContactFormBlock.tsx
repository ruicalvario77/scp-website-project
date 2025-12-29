// src/components/blocks/ContactFormBlock.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

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

export default function ContactFormBlock() {
  const contactInfo = [
    { type: 't', value: '416-637-2707' },
    { type: 'e', value: 'info@scp-rf.com' },
    { type: 'a', value: '70 York Street, Suite 700, Toronto, ON M5J 1S9' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/scp-resource-finance/', icon: '/scp-section-6-icon-linkedin.svg' },
    { label: 'X (Twitter)', href: 'https://x.com/SCPResFin', icon: '/scp-section-6-icon-x.svg' },
  ];

  return (
    <section className="relative bg-primary text-white overflow-hidden z-20">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <Image src="/about-bg.svg" alt="Background texture" fill className="object-cover" priority />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-32 z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* RIGHT COLUMN: Heading & Form (Order 1 on mobile) */}
          <div className="flex flex-col order-1 md:order-2">
            <div className="text-center md:text-right mb-12">
                <p className="text-section-title text-white mb-4">CONTACT</p>
                <h1 className="text-accent">Get in Touch</h1>
            </div>

            <form className="space-y-4 w-full flex flex-col items-center md:items-end">
              {['Name', 'Subject', 'Email', 'Message'].map((label) => (
                <div key={label} className="w-full">
                  <label htmlFor={label.toLowerCase()} className="sr-only">{label}</label>
                  {label === 'Message' ? (
                    <textarea
                      id={label.toLowerCase()}
                      rows={4}
                      placeholder={label}
                      className="w-full bg-white/10 border-none rounded-sm py-4 px-6 text-white placeholder:text-white/60 focus:ring-1 focus:ring-accent outline-none text-body-copy resize-none"
                    />
                  ) : (
                    <input
                      type={label === 'Email' ? 'email' : 'text'}
                      id={label.toLowerCase()}
                      placeholder={label}
                      className="w-full bg-white/10 border-none rounded-sm py-4 px-6 text-white placeholder:text-white/60 focus:ring-1 focus:ring-accent outline-none text-body-copy"
                    />
                  )}
                </div>
              ))}
              
              <div className="pt-6">
                <button type="submit" className="group block">
                    <motion.div initial="initial" whileHover="hover" className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent transition-colors duration-300 cursor-pointer">
                        <span className="text-nav-title text-white pl-7 pr-4">Submit</span>
                        <span className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-full group-hover:bg-brand-gold transition-colors duration-300 overflow-hidden relative">
                            <motion.div variants={chevronVariants}>
                                <ChevronRight className="w-4 h-4 text-white" />
                            </motion.div>
                        </span>
                    </motion.div>
                </button>
              </div>
            </form>
          </div>

          {/* LEFT COLUMN: Contact Details & Socials (Order 2 on mobile) */}
          <div className="flex flex-col order-2 md:order-1 md:mt-[160px]">
            
            {/* 1. Centered Contact Info for Mobile */}
            <ul className="space-y-8 mb-16 flex flex-col items-center md:items-start">
              {contactInfo.map((item) => (
                <li key={item.type} className="flex flex-col md:flex-row items-center md:items-baseline space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
                  <span className="font-dm font-bold text-[18px] text-brand-blue">
                    {item.type}.
                  </span>
                  <a 
                    href={item.type === 'e' ? `mailto:${item.value}` : item.type === 't' ? `tel:${item.value}` : 'info@scp-rf.com'} 
                    className="text-body-copy text-white hover:text-accent transition duration-300 max-w-[280px] md:max-w-none"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>

            {/* 2. Mobile Accent Line Solution (Hidden on Desktop) */}
            <div className="relative mb-16 md:mb-10 w-full flex justify-center md:justify-start">
                {/* Horizontal Line */}
                <div className="absolute top-1/2 left-0 right-0 border-t border-brand-light-blue opacity-30 md:static md:w-20 md:border-t md:opacity-50"></div>
                
                {/* Accent Image - Only visible on Mobile */}
                <div className="relative z-10 bg-primary px-4 md:hidden">
                   <Image 
                     src="/scp-section-2-accent-line.svg" 
                     alt="Divider graphic" 
                     width={50} 
                     height={2} 
                   />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
                <div className="flex space-x-8">
                    {socialLinks.map((link) => (
                      <a key={link.label} href={link.href} aria-label={link.label} className="group flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <div className="relative size-10 md:size-11"> 
                          <Image src={link.icon} alt={link.label} fill className="object-contain hover:opacity-80 transition-opacity" />
                        </div>
                      </a>
                    ))}
                </div>
                
                <p className="text-small text-accent max-w-[280px] md:max-w-md text-center md:text-left leading-relaxed"> 
                  Subscribe to SCP Insights for thought leadership on precious metals and real assets.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
