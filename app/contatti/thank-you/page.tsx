import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function ThankYouPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <div className="rounded-3xl border border-line bg-paper p-8 text-center shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Richiesta inviata</p>
          <h1 className="mt-3 font-[var(--font-display)] text-4xl font-semibold">Grazie, ti contatteremo a breve</h1>
          <p className="mt-4 text-ink/80">
            Riceverai una proposta iniziale con perimetro pilot, ipotesi KPI e step operativi per arrivare al go-live.
          </p>
          <Link href="/" className="focus-ring mt-6 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-[#08694f]">
            Torna alla home
          </Link>
        </div>
      </Container>
    </section>
  );
}
