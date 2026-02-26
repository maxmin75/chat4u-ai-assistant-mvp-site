import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function DeliverablesSection() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-line bg-paper p-6 shadow-card">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold">Deliverable inclusi</h3>
            <ul className="mt-4 space-y-2 text-ink/85">
              {siteConfig.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-line bg-paper p-6 shadow-card">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold">Riduzione rischio e costi</h3>
            <ul className="mt-4 space-y-2 text-ink/85">
              <li>• Pilot iniziale prima di scalare budget.</li>
              <li>• Logging e controllo continuo su tono/accuratezza.</li>
              <li>• Handoff umano nei casi ambigui o sensibili.</li>
              <li>• Ottimizzazione run cost: KB piccola, caching FAQ, limiti sessione.</li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}

export function StackSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">Stack tecnico</p>
        <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">Tecnologia solida, implementazione pragmatica</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {Object.entries(siteConfig.stack).map(([group, values]) => (
            <article key={group} className="rounded-2xl border border-line bg-paper p-5">
              <h3 className="text-base font-semibold capitalize">{group}</h3>
              <ul className="mt-3 space-y-1 text-sm text-ink/85">
                {values.map((value) => (
                  <li key={value}>• {value}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
