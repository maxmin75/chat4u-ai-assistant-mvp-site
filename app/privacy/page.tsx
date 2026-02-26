import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy'
};

export default function PrivacyPage() {
  return (
    <section className="py-16">
      <Container className="max-w-4xl">
        <h1 className="font-[var(--font-display)] text-4xl font-semibold">Privacy Policy (placeholder)</h1>
        <p className="mt-4 text-ink/80">
          Questa pagina e un placeholder. Inserire informativa completa su finalita trattamento, base giuridica, tempi di retention e diritti interessati.
        </p>
      </Container>
    </section>
  );
}
