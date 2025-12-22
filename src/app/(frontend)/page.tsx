// src/app/(frontend)/page.tsx

// Import all your blocks using absolute paths (@/)
import HeroBlock from '@/components/blocks/HeroBlock';
import StatsBlock from '@/components/blocks/TransactionsBlock'; // 'Transactions' section is stats
import AboutBlock from '@/components/blocks/AboutBlock'; // 'About' is the second dark section
import ExpertiseBlock from '@/components/blocks/ExpertiseBlock'; // 'Expertise' is the 3 service cards
import InsightsBlock from '@/components/blocks/InsightsBlock';
import ContactFormBlock from '@/components/blocks/ContactFormBlock';

export default function Home() {
  return (
    <main>
      {/* Assemble the homepage in order of appearance in the PDF */}
      <HeroBlock />
      <AboutBlock />
      <ExpertiseBlock />
      <StatsBlock />
      <InsightsBlock />
      <ContactFormBlock />
    </main>
  );
}
