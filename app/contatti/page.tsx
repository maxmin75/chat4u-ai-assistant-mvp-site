import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { LeadForm } from '@/components/forms/LeadForm';

export const metadata: Metadata = {
  title: 'Contatti'
};

export default function ContattiPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">Richiedi demo</p>
            <h1 className="mt-3 font-[var(--font-display)] text-4xl font-semibold">Parliamo del tuo pilot AI Assistant</h1>
            <p className="mt-4 text-ink/80">
              Condividi il tuo contesto: definiamo obiettivo, finestra 2-4 settimane, KPI e piano di go-live progressivo.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/80">
              <li>• Pilot-first: riduce rischio prima di scalare.</li>
              <li>• Logging e controllo: niente black box ingestibile.</li>
              <li>• Handoff umano: sempre previsto nei flussi critici.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-line bg-paper p-6 shadow-card">
            <LeadForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
