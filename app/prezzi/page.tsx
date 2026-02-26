import { Metadata } from 'next';
import { PricingCards, PricingComparisonTable } from '@/components/sections/PricingCards';
import { CtaBand } from '@/components/sections/CtaBand';
import { PricingPageTracker } from '@/components/sections/PricingPageTracker';

export const metadata: Metadata = {
  title: 'Prezzi'
};

export default function PrezziPage() {
  return (
    <>
      <PricingPageTracker />
      <PricingCards />
      <PricingComparisonTable />
      <CtaBand
        title="Prezzi finali da definire sul tuo scenario"
        text="Il costo reale dipende da complessita KB, volume conversazioni, integrazioni e requisiti compliance."
      />
    </>
  );
}
