// src/components/blocks/ContactFormBlock.tsx
import React from 'react';
import Image from 'next/image';
import { Linkedin, X, ChevronRight } from 'lucide-react';

export default function ContactFormBlock() {
  const contactInfo = [
    { type: 't', value: '416-637-2707' },
    { type: 'e', value: 'info@scp-rf.com' },
    { type: 'a', value: '70 York Street, Suite 700, Toronto, ON M5J 1S9' },
  ];

  return (
    <section className="relative bg-primary text-white overflow-hidden z-20">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <Image 
          src="/about-bg.svg" 
          alt="Background texture" 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* LEFT COLUMN: Contact Details & Socials */}
          {/* md:mt-[152px] aligns the first list item with the top of the 'Name' input field */}
          <div className="flex flex-col order-2 md:order-1 md:mt-[160px]">
            <ul className="space-y-8 mb-16">
              {contactInfo.map((item) => (
                <li key={item.type} className="flex items-baseline space-x-6">
                  <span className="font-dm font-bold text-[18px] w-6 flex-shrink-0 text-brand-blue">
                    {item.type}.
                  </span>
                  <a 
                    href={item.type === 'e' ? `mailto:${item.value}` : item.type === 't' ? `tel:${item.value}` : '#'} 
                    className="text-body-copy text-white hover:text-accent transition duration-300"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="w-20 h-px bg-brand-light-blue opacity-50 mb-10"></div>

            <div className="flex items-center space-x-8">
                <div className="flex space-x-4">
                    <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-brand-gold rounded-full hover:bg-white transition-colors duration-300 group">
                        <Linkedin className="w-5 h-5 text-primary" fill="currentColor" />
                    </a>
                    <a href="#" aria-label="X (Twitter)" className="w-10 h-10 flex items-center justify-center bg-brand-gold rounded-full hover:bg-white transition-colors duration-300 group">
                        <X className="w-5 h-5 text-primary" />
                    </a>
                </div>
                
                <p className="text-small text-accent max-w-md"> 
                  Subscribe to SCP Insights for thought leadership on precious metals and real assets.
                </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Heading & Form */}
          <div className="flex flex-col order-1 md:order-2">
            <div className="text-left md:text-right mb-12">
                <p className="text-section-title text-white mb-4">CONTACT</p>
                <h1 className="text-accent">Get in Touch</h1>
            </div>

            <form className="space-y-4 w-full flex flex-col items-end">
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
                <button
                  type="submit"
                  className="inline-flex items-center p-1 border border-accent rounded-full bg-transparent hover:bg-accent/10 transition duration-300 group cursor-pointer"
                >
                    <span className="btn-small text-white pl-8 pr-5 uppercase tracking-widest font-bold">Submit</span>
                    <span className="flex items-center justify-center w-10 h-10 bg-brand-blue rounded-full group-hover:bg-brand-sky transition duration-300">
                        <ChevronRight className="w-4 h-4 text-white" />
                    </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
