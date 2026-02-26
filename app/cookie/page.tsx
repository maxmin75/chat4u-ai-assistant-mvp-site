import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Cookie'
};

export default function CookiePage() {
  return (
    <section className="py-16">
      <Container className="max-w-4xl">
        <h1 className="font-[var(--font-display)] text-4xl font-semibold">Cookie Policy (placeholder)</h1>
        <p className="mt-4 text-ink/80">
          Questa pagina e un placeholder. Inserire dettaglio cookie tecnici/analytics, consenso e gestione preferenze.
        </p>
      </Container>
    </section>
  );
}
