import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface StatItem {
  val: string;
  label: string;
}

const TransactionsBlock: React.FC = () => {
  const statsData: StatItem[] = [
    { val: "380+", label: "TRANSACTIONS" },
    { val: ">$7bn", label: "CAPITAL RAISED" },
    { val: ">$4.7bn", label: "M&A ADVISORY" }
  ];

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

      {/* Main Content Container: max-w-7xl centered with standard padding */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">

        {/* --- 2. MAIN TEXT CONTENT & CARD CONTAINER --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 md:mb-32 relative">
          
          {/* Left Column: Everything aligned to the right. */}
          <div className="flex flex-col justify-end items-end text-right pr-8">
             <p className="text-section-title text-primary mb-6">TRANSACTIONS</p>

             <h1 className="text-primary mt-0"> 
              <span className="text-accent">Proven track.</span> Trusted partner.
            </h1>
            
            <p className="text-section-p text-primary mt-8 md:w-3/4"> 
              Our mission is to be a long-term, trusted partner to corporates and investors immersed in the resources value chain by providing expert guidance, superior returns, and exceptional service. We invest alongside our clients.
            </p>
          </div> 

          {/* Right Column: Empty placeholder for the card area */}
          <div className="hidden md:block relative h-full">
            {/* --- 1. THE OVERLAPPING DARK CARD (Updated positioning, width, and corners) --- */}
            <div className="absolute bottom-0 right-[-16px] lg:right-[-32px] w-[320px] md:w-[390px] top-[-200px] md:top-[-250px] z-30">
                
                {/* THIS IS THE LINE YOU CAN CHANGE FOR BORDER RADIUS */}
                {/* We are back to using rounded-t-lg and rounded-b-lg classes */}
                <div className="relative bg-primary text-white rounded-t-4xl rounded-b-4xl shadow-2xl overflow-hidden h-full flex flex-col">
                    
                    {/* Background image container (updated source and opacity) */}
                    <div className="absolute inset-0 opacity-60 pointer-events-none">
                        <Image 
                            src="/about-bg.svg" 
                            alt="Background texture" 
                            fill 
                            className="object-cover" 
                        />
                    </div>

                    {/* Card Content: Uses flex-grow to push the button to the bottom, justify-center for horizontal centering */}
                    <div className="relative p-8 flex flex-col flex-grow justify-end items-center"> 
                        {/* Call to Action Button */}
                        <Link
                            href="/transactions"
                            className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent hover:bg-accent/10 transition duration-300 group"
                        >
                            <span className="btn-small text-white pl-4 pr-3">Recent transactions</span>
                            <span className="flex items-center justify-center w-8 h-8 bg-brand-blue rounded-full group-hover:bg-brand-sky transition duration-300">
                                <ChevronRight className="w-3 h-3 text-white" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* --- 3. STATS SECTION (Bottom of the block) --- */}
        <div className="relative mt-32 md:mt-48 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left">
            {statsData.map((stat: StatItem, i: number) => (
              <div key={i} className="relative">
                <p className="font-serif font-light text-7xl md:text-[100px] leading-[56px] text-brand-blue">{stat.val}</p>
                <p className="text-section-title text-brand-grey-sky mt-6 md:mt-10">{stat.label}</p>
                <div className='absolute bottom-[-47px] left-0 transform translate-y-1/2 z-10'>
                   <Image src="/scp-section-2-accent-line.svg" alt="Divider graphic" width={50} height={2} />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 inset-x-0 h-px bg-brand-light-blue opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default TransactionsBlock;
