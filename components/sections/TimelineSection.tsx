import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function TimelineSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">Roadmap 4 settimane</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">Dal discovery al pilot in produzione controllata</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {siteConfig.timeline.map((step, idx) => (
            <article
              key={step.week}
              className="animate-fade-up rounded-3xl border border-line bg-paper p-5 shadow-card"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <p className="text-sm font-semibold text-accent">{step.week}</p>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink/80">
                {step.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
