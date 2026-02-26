'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { track } from '@/lib/analytics';

export function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-4xl">
        <h2 className="font-[var(--font-display)] text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openId === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-button-${index}`;

            return (
              <article key={faq.q} className="rounded-2xl border border-line bg-paper p-4">
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    className="focus-ring flex w-full items-center justify-between gap-4 rounded-md text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => {
                      setOpenId(isOpen ? null : index);
                      track('faq_open', { question: faq.q });
                    }}
                  >
                    <span className="font-semibold">{faq.q}</span>
                    <span aria-hidden="true" className="text-lg">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${isOpen ? 'mt-3 block' : 'hidden'} text-sm text-ink/80`}
                >
                  {faq.a}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
