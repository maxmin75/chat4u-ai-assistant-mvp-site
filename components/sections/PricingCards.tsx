'use client';

import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Buttons';
import { track } from '@/lib/analytics';

export function PricingCards() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-7 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">Prezzi e pacchetti</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">Scegli il ritmo: pilot, scaling o enterprise</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {siteConfig.pricing.map((plan, idx) => (
            <article
              key={plan.plan}
              className={`rounded-3xl border p-6 shadow-card ${idx === 1 ? 'border-accent bg-white' : 'border-line bg-paper'}`}
            >
              <h3 className="font-[var(--font-display)] text-2xl font-semibold">{plan.plan}</h3>
              <p className="mt-2 text-sm text-ink/70">{plan.subtitle}</p>
              <p className="mt-4 text-3xl font-bold text-ink">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/85">
                {plan.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <LinkButton href="/contatti" onClick={() => track('open_pricing', { plan: plan.plan })}>
                  {plan.cta}
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PricingComparisonTable() {
  return (
    <section className="pb-14">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-line bg-paper">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Confronto pacchetti</caption>
            <thead className="bg-white">
              <tr>
                <th className="border-b border-line px-4 py-3">Voce</th>
                <th className="border-b border-line px-4 py-3">Pilot</th>
                <th className="border-b border-line px-4 py-3">Growth</th>
                <th className="border-b border-line px-4 py-3">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {siteConfig.pricingCompare.map((row) => (
                <tr key={row.feature}>
                  <th className="border-b border-line/80 px-4 py-3 font-semibold">{row.feature}</th>
                  <td className="border-b border-line/80 px-4 py-3">{row.pilot}</td>
                  <td className="border-b border-line/80 px-4 py-3">{row.growth}</td>
                  <td className="border-b border-line/80 px-4 py-3">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
