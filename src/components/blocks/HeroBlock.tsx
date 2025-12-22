// src/components/blocks/HeroBlock.tsx
'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';

// Define a type for the data prop if integrating with Payload CMS later
interface HeroBlockProps {
  // data: {
  //   title: string;
  //   description: string;
  //   backgroundImage: { url: string };
  //   logoImage: { url: string };
  // }
}

export default function HeroBlock(/* { data } : HeroBlockProps */) {
  const scrollToNextSection = useCallback(() => {
    // Scrolls exactly one viewport height down
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  // Use h-dvh for full viewport height. 
  // Use -mt-[106px] to pull the entire block up behind the sticky navbar (h-26.5 = 106px)
  return (
    <section className="relative h-dvh -mt-26.5 overflow-hidden flex items-center">
      
      {/* Background Image with Opacity and Overlay */}
      <div className="absolute inset-0 bg-brand-cloud isolate">
        <Image
          src="/hero-block-bg.svg" 
          alt="SCP Resource Finance Background"
          fill
          priority 
          className="object-cover mix-blend-multiply"
          style={{ opacity: 0.44 }} 
        />
      </div>

      {/* Content Container: Centered on mobile, left-aligned on desktop, constrained width (1280px) */}
      {/* Added justify-center for mobile, md:justify-start for desktop */}
      <div className="mx-auto max-w-7xl px-4 md:px-0 relative z-10 w-full flex items-center justify-center md:justify-start h-full">
        
        {/* Inner Content Block: Centered text on mobile, left-aligned on desktop */}
        <div className="text-center md:text-left">
          
          {/* Logo - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block mb-32 mt-32">
            <Image
              src="/scp-section-1-logo.svg" 
              alt="SCP Resource Finance Logo"
              width={320} 
              height={87} 
              className="h-auto w-auto"
            />
          </div>

          {/* Horizontal Gold Line: w-25 (100px), h-px (1px) */}
          {/* mx-auto centers it on mobile (when parent is text-center), md:mx-0 aligns left on desktop */}
          <div className="w-25 h-px bg-brand-gold mb-12 mx-auto md:mx-0"></div>

          {/* Description Text: Constrained to 60% width on desktop screens and up */}
          {/* mx-auto centers the block on mobile */}
          <p className="font-ramillas font-light text-[32px] leading-10 tracking-normal text-brand-navy w-full md:w-3/5 mb-24 mx-auto md:mx-0 px-12 md:px-0">
            We provide specialized capital, advisory and investment services to mid-market mining companies and their investors
          </p>

          {/* Scroll Down Button: Centered using mx-auto on mobile, left aligned on desktop */}
          <button 
            onClick={scrollToNextSection}
            className="cursor-pointer w-7.5 h-7.5 bg-brand-blue rounded-full flex items-center justify-center shadow-lg hover:bg-brand-gold transition-colors focus:outline-none mx-auto md:mx-0"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-4 h-4 text-white" />
          </button>
          
        </div>
      </div>
    </section>
  );
}
