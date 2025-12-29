// src/app/(frontend)/page.tsx
"use client";

import { useRef } from 'react';
import HeroBlock from '@/components/blocks/HeroBlock';
import AboutBlock from '@/components/blocks/AboutBlock'; 
import ExpertiseBlock from '@/components/blocks/ExpertiseBlock'; 
import TransactionsBlock from '@/components/blocks/TransactionsBlock'; 
import InsightsBlock from '@/components/blocks/InsightsBlock';
import ContactFormBlock from '@/components/blocks/ContactFormBlock';
import GlobalScrollLine from '@/components/GlobalScrollLine';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  /**
   * LINE 1: About -> Expertise
   */
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);
  const lineEndRef = useRef<HTMLDivElement>(null);
  const aboutStatRefs = [stat1Ref, stat2Ref, stat3Ref];

  /**
   * LINE 2: Transactions -> Insights
   */
  const transStat1Ref = useRef<HTMLDivElement>(null);
  const transStat2Ref = useRef<HTMLDivElement>(null);
  const transStat3Ref = useRef<HTMLDivElement>(null);
  const insightsEndRef = useRef<HTMLDivElement>(null);
  const transStatRefs = [transStat1Ref, transStat2Ref, transStat3Ref];

  return (
    <main ref={containerRef} className="relative">
      <HeroBlock />

      {/* Line 1 Instance: About to Expertise */}
      <GlobalScrollLine 
        containerRef={containerRef}
        statRefs={aboutStatRefs} 
        endRef={lineEndRef}
      />

      {/* Line 2 Instance: Transactions to Insights */}
      <GlobalScrollLine 
        containerRef={containerRef}
        statRefs={transStatRefs} 
        endRef={insightsEndRef}
      />

      <section id="about">
        <AboutBlock statRefs={aboutStatRefs} />
      </section>

      <section id="services">
        <ExpertiseBlock anchorRef={lineEndRef} />
      </section>

      <section id="transactions">
        {/* Now passing the new transStatRefs */}
        <TransactionsBlock statRefs={transStatRefs} />
      </section>

      <section id="insights">
        {/* Now passing the new insightsEndRef */}
        <InsightsBlock anchorRef={insightsEndRef} />
      </section>

      <section id="contact">
        <ContactFormBlock />
      </section>
    </main>
  );
}
