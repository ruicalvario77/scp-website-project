import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; 

const AboutBlock = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden z-20">
      
      {/* 1. Background image with 60% opacity */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <Image 
          src="/about-bg.svg" 
          alt="Background texture" 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      {/* 2. ANIMATED: Floating gold contour lines (Half-size) */}
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none w-1/2 md:w-1/4 z-0">
         {/* Parent handles movement (Drift) */}
         <div className="relative w-full h-full animate-contour-drift">
           {/* Child handles opacity (Pulse) */}
           <div className="relative w-full h-full animate-contour-pulse">
             <Image 
                src="/scp-section-2-element-contour-lines.svg" 
                alt="Decorative gold lines" 
                fill
                className="object-contain object-left" 
             />
           </div>
         </div>
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
        
        {/* Vertical line anchored right */}
        <div 
          className="absolute right-0 top-[744px] w-px bg-brand-light-blue opacity-50 z-0 hidden md:block" 
          style={{ bottom: '-150px' }} 
        />

        {/* Top Section: Heading and Description */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 relative">
          <div className="flex flex-col md:text-right">
            <p className="text-section-title text-white">ABOUT</p>
            <h1 className="text-white mt-10"> 
              <span className="text-accent">A resourceful</span> partner
            </h1>
          </div>

          <div className="flex flex-col space-y-8">
            <p className="text-section-p text-white mt-10 md:mt-38"> 
              SCP is a global financial services firm focused on the metals and mining sector. We bring together technical expertise, astute capital, and strategic relationships to unearth opportunities to create meaningful value for our partners.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative mt-24 md:mt-36 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left">
            {[
              { val: "2017", label: "Founded" },
              { val: "100%", label: "Employee Owned" },
              { val: "CIRO", label: "Member" }
            ].map((stat, i) => (
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
        
        {/* "Our Story" Button alignment */}
        <div className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-start-3 flex justify-start mb-12"> 
                <Link 
                    href="/our-story" 
                    className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent hover:bg-accent/10 transition duration-300 group"
                >
                    <span className="btn-small text-white pl-7 pr-4">Our story</span>
                    <span className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-full group-hover:bg-brand-sky transition duration-300">
                        <ChevronRight className="w-4 h-4 text-white" />
                    </span>
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
