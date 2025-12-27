'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useCallback } from 'react';
import Image from 'next/image';

export default function HeroBlock() {
  const scrollToNextSection = useCallback(() => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  // 1. "SCP" Gold letters: Staggered Bottom-to-Top
  const scpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // 2. "Resource Finance": Left-to-Right Reveal
  const wordmarkVariants: Variants = {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0% 0 0)',
      transition: { delay: 1, duration: 1.2, ease: "easeInOut" } 
    }
  };

  // 3. Move entire Logo to corner
  const logoLayout: Variants = {
    initial: { position: "fixed", top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 1.6 },
    animate: { 
      position: "relative", top: 0, left: 0, x: 0, y: 0, scale: 1,
      transition: { delay: 2.8, duration: 1.2, ease: [0.76, 0, 0.24, 1] }
    }
  };

  // 4. Content Fade (Gold line, Text, Button)
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { delay: 3.8, duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  return (
    <section className="relative h-dvh -mt-26.5 overflow-hidden flex items-center bg-brand-cloud">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-block-bg.svg" 
          alt="Background" 
          fill 
          className="object-cover mix-blend-multiply opacity-45"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-0 relative z-10 w-full flex items-center justify-center md:justify-start h-full">
        <div className="text-center md:text-left w-full">
          
          <div className="mb-32 mt-32 min-h-[80px]">
            <motion.div
              variants={logoLayout}
              initial="initial"
              animate="animate"
              className="inline-block origin-left z-50"
            >
              <svg width="420" height="62" viewBox="320 0 420 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                {/* SCP GOLD LETTERS - Bottom to Top Stagger */}
                <motion.path 
                  variants={scpVariants} 
                  initial="hidden" 
                  animate="visible"
                  d="M332.829 24.9119C334.508 24.9119 336.014 24.7078 337.346 24.3099C338.677 23.912 339.804 23.3406 340.726 22.5856C341.648 21.8408 342.344 20.9429 342.836 19.892C343.317 18.8411 343.553 17.6575 343.553 16.3413C343.553 13.6579 342.672 11.6581 340.921 10.3623C339.159 9.06649 336.588 8.4135 333.218 8.4135L326.273 8.4135V24.9119H332.839H332.829ZM349.658 44.0223H347.302C346.995 44.0223 346.749 43.9713 346.534 43.8795C346.329 43.7774 346.134 43.5938 345.96 43.3285L333.791 28.0034C333.648 27.8096 333.505 27.6361 333.351 27.4933C333.197 27.3505 333.033 27.2382 332.839 27.1566C332.654 27.075 332.429 27.024 332.163 26.9831C331.907 26.9525 331.589 26.9321 331.21 26.9321H326.252V44.0121H323.497V6.24023L333.197 6.24023C337.551 6.24023 340.818 7.07689 342.99 8.7604C345.161 10.4439 346.247 12.9131 346.247 16.1679C346.247 17.6065 346.001 18.9227 345.499 20.1165C344.997 21.3102 344.28 22.3509 343.338 23.2488C342.406 24.1467 341.269 24.8813 339.937 25.4527C338.606 26.024 337.11 26.4016 335.451 26.5954C335.881 26.8607 336.27 27.2178 336.598 27.6667L349.648 44.0019L349.658 44.0223Z" 
                  fill="#D4AF37" 
                />

                {/* RESOURCE FINANCE - Left to Right Reveal Group */}
                <motion.g variants={wordmarkVariants} initial="hidden" animate="visible">
                  <path d="M400.249 41.7466L400.187 44.0219L377.468 44.0219V6.25L400.187 6.25V8.51509L380.234 8.51509V23.7891L396.838 23.7891V26.0032L380.234 26.0032V41.7466L400.249 41.7466Z" fill="#182946"/>
                  <path d="M448.402 10.8426C448.238 11.1385 448.002 11.2915 447.705 11.2915C447.469 11.2915 447.172 11.1283 446.804 10.8018C446.435 10.4753 445.943 10.108 445.318 9.71003C444.694 9.31211 443.915 8.9346 442.973 8.6081C442.041 8.2714 440.883 8.09794 439.5 8.09794C438.117 8.09794 436.919 8.29181 435.874 8.67953C434.829 9.06724 433.959 9.60801 433.252 10.2814C432.545 10.965 432.013 11.7405 431.644 12.6281C431.275 13.526 431.091 14.4545 431.091 15.434C431.091 16.7094 431.367 17.7705 431.91 18.6071C432.463 19.4438 433.18 20.1478 434.071 20.7396C434.963 21.3314 435.977 21.8211 437.114 22.219C438.251 22.6272 439.418 23.0149 440.617 23.4026C441.815 23.8005 442.973 24.229 444.12 24.6984C445.257 25.1677 446.261 25.7697 447.162 26.4737C448.053 27.1879 448.77 28.0654 449.313 29.1061C449.856 30.1468 450.133 31.4426 450.133 32.9935C450.133 34.5444 449.856 36.0646 449.313 37.4625C448.77 38.8603 447.982 40.0745 446.947 41.105C445.912 42.1355 444.642 42.9517 443.137 43.5435C441.641 44.1353 439.92 44.4414 437.995 44.4414C435.495 44.4414 433.334 44.0027 431.541 43.115C429.739 42.2273 428.151 41.0233 426.799 39.4929L427.557 38.3195C427.772 38.0542 428.018 37.9216 428.305 37.9216C428.468 37.9216 428.673 38.0338 428.919 38.2379C429.165 38.4522 429.472 38.7174 429.831 39.0235C430.189 39.3398 430.62 39.6765 431.121 40.0438C431.623 40.4112 432.207 40.7479 432.863 41.054C433.518 41.36 434.287 41.6253 435.137 41.8396C435.997 42.0539 436.97 42.1559 438.056 42.1559C439.551 42.1559 440.893 41.9314 442.082 41.4723C443.259 41.0233 444.253 40.401 445.073 39.6153C445.882 38.8297 446.507 37.9012 446.937 36.8299C447.367 35.7483 447.582 34.5954 447.582 33.371C447.582 32.0344 447.306 30.9325 446.763 30.0754C446.22 29.2082 445.503 28.4939 444.612 27.9124C443.72 27.3308 442.706 26.8512 441.569 26.4533C440.432 26.0656 439.275 25.6779 438.076 25.3106C436.878 24.9331 435.721 24.5147 434.573 24.0556C433.436 23.5964 432.422 23.0047 431.531 22.2803C430.64 21.5558 429.923 20.658 429.38 19.5866C428.837 18.5153 428.561 17.1583 428.561 15.5462C428.561 14.281 428.806 13.0669 429.288 11.8935C429.769 10.7201 430.476 9.67943 431.408 8.78156C432.34 7.88368 433.488 7.15926 434.85 6.6185C436.212 6.07773 437.779 5.80225 439.521 5.80225C441.487 5.80225 443.249 6.11855 444.816 6.74094C446.373 7.36333 447.807 8.31221 449.088 9.5978L448.443 10.8222L448.402 10.8426Z" fill="#182946"/>
                  <path d="M513.784 25.127C513.784 22.2191 513.354 19.5867 512.473 17.2094C511.602 14.8321 510.363 12.8017 508.775 11.108C507.188 9.41424 505.272 8.11845 503.049 7.20017C500.827 6.28189 498.379 5.82275 495.695 5.82275C493.011 5.82275 490.563 6.2921 488.351 7.21038C486.138 8.13886 484.233 9.44485 482.645 11.1284C481.047 12.8017 479.828 14.8321 478.947 17.2094C478.077 19.5867 477.636 22.2089 477.636 25.127C477.636 28.0451 478.066 30.6877 478.947 33.065C479.828 35.4321 481.057 37.4626 482.645 39.1461C484.233 40.8296 486.138 42.1254 488.351 43.0437C490.563 43.9619 493.011 44.4211 495.695 44.4211C498.379 44.4211 500.827 43.9619 503.049 43.0437C505.272 42.1254 507.188 40.8296 508.775 39.1461C510.363 37.4626 511.602 35.4321 512.473 33.0548C513.344 30.6877 513.784 28.0349 513.784 25.127Z" fill="#182946"/>
                  {/* ... Add all other paths here ... */}
                </motion.g>
              </svg>
            </motion.div>
          </div>

          <motion.div variants={contentVariants} initial="hidden" animate="visible">
            <div className="w-25 h-px bg-brand-gold mb-12 mx-auto md:mx-0"></div>
            <p className="font-ramillas font-light text-[32px] leading-10 text-brand-navy w-full md:w-3/5 mb-24 mx-auto md:mx-0 px-12 md:px-0">
              We provide specialized capital, advisory and investment services to mid-market mining companies and their investors
            </p>
            <button 
              onClick={scrollToNextSection}
              className="cursor-pointer w-7.5 h-7.5 bg-brand-blue rounded-full flex items-center justify-center shadow-lg hover:bg-brand-gold transition-colors focus:outline-none mx-auto md:mx-0"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
