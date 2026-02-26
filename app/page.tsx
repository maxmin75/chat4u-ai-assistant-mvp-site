import Script from 'next/script';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { DemoSection } from '@/components/sections/DemoSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { DeliverablesSection, StackSection } from '@/components/sections/FeatureList';
import { PricingCards } from '@/components/sections/PricingCards';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { CtaBand } from '@/components/sections/CtaBand';
import { siteConfig } from '@/data/site';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: siteConfig.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <SocialProof />
      <DemoSection />
      <CtaBand
        title="Parti con un pilot senza sovra-investire"
        text="Definiamo use case, KPI e governance in anticipo: riduci rischio e acceleri il go-live con controllo reale."
      />
      <TimelineSection />
      <DeliverablesSection />
      <StackSection />
      <PricingCards />
      <FaqAccordion />
    </>
  );
}
