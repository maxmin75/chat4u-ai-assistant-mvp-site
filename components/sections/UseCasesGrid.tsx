import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function UseCasesGrid() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mb-7 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">Use case</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">Dove un AI Assistant porta valore rapido</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.useCases.map((item, idx) => (
            <article
              key={item.title}
              className="animate-fade-up rounded-3xl border border-line bg-paper p-5 shadow-card"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <h3 className="font-[var(--font-display)] text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{item.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
