// src/components/blocks/ExpertiseBlock.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; 

const ExpertiseBlock = () => {
  // Data structure for the three expertise cards
  const expertiseAreas = [
    {
      // Use <br /> for forced line breaks in titles
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

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        {/* Top Section: Heading and Description using flexible columns */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 md:mb-32">
          
          {/* Left Column: Description (takes 40% width on md screens) */}
          <div className="flex flex-col justify-end pr-10 md:w-[40%]">
            <p className="text-section-p text-slate-900">
              We enable growth in the resources ecosystem through a comprehensive and nimble offering backed by industry experts with unique cross-border perspectives.
            </p>
          </div>
          
          {/* Right Column: Main Title (takes 60% width on md screens) */}
          <div className="flex flex-col md:w-[60%]">
            <p className="text-section-title text-slate-900">EXPERTISE</p>
            <h1 className="text-slate-900 mt-10"> 
              {/* Forced line break using <br /> to ensure strict two lines */}
              <span className="text-accent">Elemental</span> <br /> solutions provider
            </h1>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, i) => (
              <div key={i} className="flex flex-col">
                
                <h3 className="text-brand-blue">{area.title}</h3>
                
                {/* Horizontal line & SVG accent wrapper placed between title and description */}
                {/* Added margin-top to separate from title, margin-bottom to separate from description */}
                <div className='relative mt-6 mb-6'>
                   {/* This image component acts as the overlay */}
                   <Image src="/scp-section-2-accent-line.svg" alt="Divider graphic" width={50} height={2} className='relative z-10' />
                   
                   {/* The actual horizontal line behind the SVG */}
                   <div className="absolute top-1/2 left-0 w-[65%] h-px bg-brand-light-blue opacity-50 z-0"></div>
                </div>

                <p className="text-body-copy text-slate-900">{area.description}</p>

              </div>
            ))}
          </div>
        </div>
        
        {/* "Learn More" Button alignment */}
        <div className="mt-20 md:mt-40"> 
            <Link 
                href="/expertise" 
                className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent hover:bg-accent/10 transition duration-300 group"
            >
                <span className="btn-small text-slate-900 pl-7 pr-4">Learn more</span>
                <span className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-full group-hover:bg-brand-sky transition duration-300">
                    <ChevronRight className="w-4 h-4 text-white" />
                </span>
            </Link>
        </div>

      </div>
      
      {/* Light blue line at the bottom to mark the section end */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-brand-light-blue opacity-50"></div>

    </section>
  );
};

export default ExpertiseBlock;
