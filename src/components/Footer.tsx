// src/components/Footer.tsx

import Image from 'next/image';

/**
 * Regulatory and Membership attribution section.
 * Required for compliance with CIRO/CIPF guidelines regarding 
 * logo placement and disclosure visibility.
 */
const ComplianceSection = () => {
  return (
    <div className="bg-white py-12 md:py-25"> 
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          
          <div className="md:w-1/2 text-center md:text-left">
            <p className="px-8 md:px-0 text-mobile-small-copy md:text-body-copy text-brand-navy">
              We are a member of the Canadian Investment Regulatory Organization (&quot;CIRO&quot;) and a member firm of the Canadian Investor Protection Fund (CIPF). Customers&apos; accounts at CIRO Members are protected by the CIPF&apos;s Investment Dealer Fund in accordance with its Coverage Policy. A brochure describing the scope and nature and limits of coverage is available upon request or at www.cipf.ca
            </p>
          </div>

          <div className="flex justify-center space-x-12 items-center w-full md:w-auto">
            
            {/* CIRO Regulatory Brandmark */}
            <div className="w-40 md:w-64"> 
              <Image 
                src="/scp-section-7-image-1.svg" 
                alt="CIRO OCRI Logo" 
                width={256} 
                height={96} 
                className="h-auto w-full"
              />
            </div>

            {/* CIPF Protection Fund Brandmark */}
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

/**
 * Legal footer containing copyright, branding, and policy links.
 * Uses flex-order to prioritize brand visibility on mobile while 
 * maintaining standard left-to-right hierarchy on desktop.
 */
const CopyrightSection = () => {
  return (
    <div className="bg-brand-navy py-12 md:py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-0 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Centered branding anchor for desktop viewport */}
        <div className="block md:order-2">
            <Image
              src="/scp-footer-logo.svg" 
              alt="SCP Resource Finance"
              width={160}
              height={30} 
            />
        </div>

        <a href="/policies" className="text-mobile-small-copy md:text-small text-white hover:text-brand-gold transition-colors md:order-3">
          Policies & Disclaimers
        </a>
        
        <p className="text-mobile-small-copy md:text-small text-white md:order-1">
          ©2025 SCP Resource Finance LP | All rights reserved
        </p>

      </div>
    </div>
  );
};


export default function Footer() {
  return (
    <footer role="contentinfo">
      <ComplianceSection />
      <CopyrightSection />
    </footer>
  );
}
