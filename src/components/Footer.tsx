// src/components/Footer.tsx

import Image from 'next/image';

const ComplianceSection = () => {
  return (
    // Outer container for the white section, full width
    <div className="bg-white py-12 md:py-25"> 
      {/* Inner container constrained to 1280px max-width with auto margins and padding */}
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        {/* Mobile: text centered & stacked above logos. Desktop: text on left, logos on right, vertically centered items */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          
          {/* Text Block - Mobile: center aligned with extra padding, Desktop: half width, left aligned, no padding */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="px-8 md:px-0 text-mobile-small-copy md:text-body-copy text-brand-navy">
              We are a member of the Canadian Investment Regulatory Organization (&quot;CIRO&quot;) and a member firm of the Canadian Investor Protection Fund (CIPF). Customers&apos; accounts at CIRO Members are protected by the CIPF&apos;s Investment Dealer Fund in accordance with its Coverage Policy. A brochure describing the scope and nature and limits of coverage of coverage is available upon request or at www.cipf.ca
            </p>
          </div>

          {/* Logos Block - Mobile: side by side, centered below text. Desktop: side by side, right aligned/spaced */}
          <div className="flex justify-center space-x-12 items-center w-full md:w-auto">
            
            {/* CIRO Logo - Using standard w-64 (256px) */}
            <div className="w-40 md:w-64"> 
              <Image 
                src="/scp-section-7-image-1.svg" 
                alt="CIRO OCRI Logo" 
                width={256} 
                height={96} 
                className="h-auto w-full"
              />
            </div>

            {/* CIPF Logo */}
            <div className="w-24 md:w-32">
              <Image 
                src="/cipf-logo.svg" 
                alt="CIPF FCP Member Membre Logo" 
                width={128} 
                height={80} 
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CopyrightSection = () => {
  return (
    // Outer container for the navy section, increased mobile padding (py-12 = 48px top/bottom)
    <div className="bg-brand-navy py-12 md:py-6">
      {/* Inner container constrained to 1280px with auto margins and padding */}
      {/* Mobile: Stacked, Centered. Desktop: Flex, justify between. */}
      <div className="mx-auto max-w-7xl px-4 md:px-0 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* ELEMENT 1 (Mobile Top, Desktop Center): White SCP Logo */}
        {/* We use md:order-2 to move it to the center column on desktop */}
        <div className="block md:order-2">
            <Image
              src="/scp-footer-logo.svg" 
              alt="SCP Resource Finance"
              width={160}
              height={30} 
            />
        </div>

        {/* ELEMENT 2 (Mobile Middle, Desktop Right): Policies Link */}
        {/* We use md:order-3 to move it to the right column on desktop */}
        <a href="/policies" className="text-mobile-small-copy md:text-small text-white hover:text-brand-gold transition-colors md:order-3">
          Policies & Disclaimers
        </a>
        
        {/* ELEMENT 3 (Mobile Bottom, Desktop Left): Copyright text */}
        {/* We use md:order-1 to move it to the left column on desktop */}
        <p className="text-mobile-small-copy md:text-small text-white md:order-1">
          ©2025 SCP Resource Finance LP | All rights reserved
        </p>

      </div>
    </div>
  );
};


export default function Footer() {
  return (
    // Main wrapper for semantic footer tag
    <footer>
      <ComplianceSection />
      <CopyrightSection />
    </footer>
  );
}
