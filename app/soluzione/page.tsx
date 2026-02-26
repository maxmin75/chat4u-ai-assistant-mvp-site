import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'Soluzione'
};

const blocks = [
  {
    title: 'Chat AI Assistant',
    desc: 'Interfaccia testuale brandizzata, intent routing e risposte con citazioni opzionali dalla knowledge base.'
  },
  {
    title: 'Voice Assistant',
    desc: 'Pipeline STT -> LLM/RAG -> TTS in streaming per esperienze assistite rapide e naturali.'
  },
  {
    title: 'RAG e Knowledge Base',
    desc: 'Embedding + vector DB (pgvector/Pinecone/Weaviate), retrieval top-k e aggiornamento KB continuo.'
  },
  {
    title: 'Dashboard Operativa',
    desc: 'Log conversazioni, fallback, rating utente, metriche latenza e accuratezza su test set KPI.'
  },
  {
    title: 'Sicurezza e GDPR',
    desc: 'Policy, guardrail, data minimization, governance log e checklist compliance per rollout pilot.'
  }
];

export default function SoluzionePage() {
  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">Soluzione</p>
          <h1 className="mt-3 max-w-4xl font-[var(--font-display)] text-4xl font-semibold sm:text-5xl">
            Un unico flusso operativo: input, policy, retrieval, risposta, logging e handoff.
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-ink/80">
            Costruiamo un MVP pragmatico che integra frontend Next.js, backend Node e RAG. Obiettivo: arrivare a un pilot misurabile,
            non a una demo fine a se stessa.
          </p>
        </Container>
      </section>

      <section className="pb-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {blocks.map((block) => (
              <article key={block.title} className="rounded-3xl border border-line bg-paper p-6 shadow-card">
                <h2 className="font-[var(--font-display)] text-2xl font-semibold">{block.title}</h2>
                <p className="mt-2 text-ink/80">{block.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Vuoi capire se il tuo use case e pronto per il pilot?"
        text="In 30 minuti analizziamo processo, rischio operativo e KPI minimi per andare live con controllo."
      />
    </>
  );
}
