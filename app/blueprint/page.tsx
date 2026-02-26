import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { BlueprintGate } from '@/components/forms/BlueprintGate';

export const metadata: Metadata = {
  title: 'Blueprint tecnico operativo'
};

export default function BlueprintPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">Lead magnet</p>
            <h1 className="mt-3 font-[var(--font-display)] text-4xl font-semibold">Blueprint tecnico operativo MVP AI Assistant</h1>
            <p className="mt-4 text-ink/80">
              Template pronto per il tuo team: struttura dati, endpoint, prompt framework e checklist compliance. Utile per allineare IT,
              prodotto e business prima del pilot.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/80">
              <li>• Schema DB: utenti, sessioni, log, rating.</li>
              <li>• Endpoint API: chat, retrieval, feedback, fallback.</li>
              <li>• Prompt template: regole brand + contesto + history.</li>
              <li>• Checklist GDPR: minimizzazione dati, consenso, retention.</li>
            </ul>
          </div>
          <BlueprintGate />
        </div>
      </Container>
    </section>
  );
}
