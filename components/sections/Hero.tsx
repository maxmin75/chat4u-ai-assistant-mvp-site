import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Buttons';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 animate-fade-up">
            <p className="inline-flex rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
              MVP 2-4 settimane
            </p>
            <h1 className="font-[var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
              AI Assistant <span className="text-accent">testuale + vocale</span> con RAG, pronto per il pilot.
            </h1>
            <p className="max-w-2xl text-lg text-ink/80">
              Progettiamo e rilasciamo un MVP misurabile: chat brandizzata, pipeline voce, logging, KPI e handoff umano.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/contatti">{siteConfig.cta.primary}</LinkButton>
              <LinkButton href="/prezzi" variant="ghost">
                {siteConfig.cta.secondary}
              </LinkButton>
            </div>
            <ul className="space-y-2 text-sm text-ink/80">
              {siteConfig.heroBullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="animate-fade-up rounded-3xl border border-line bg-paper p-6 shadow-card [animation-delay:140ms]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">Architettura operativa</p>
            <ol className="mt-4 space-y-3 text-sm text-ink/90">
              <li>1. Input testo/audio</li>
              <li>2. Policy e guardrail</li>
              <li>3. Retrieval top-k su KB</li>
              <li>4. Prompt finale (regole brand + contesto + storia)</li>
              <li>5. Risposta + citazioni opzionali</li>
              <li>6. Logging + rating + TTS se voce</li>
            </ol>
          </aside>
        </div>
      </Container>
    </section>
  );
}
