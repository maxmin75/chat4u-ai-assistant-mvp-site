import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Buttons';

type Props = {
  title: string;
  text: string;
};

export function CtaBand({ title, text }: Props) {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-3xl border border-ink bg-ink p-7 text-paper shadow-card">
          <h2 className="font-[var(--font-display)] text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-paper/85">{text}</p>
          <div className="mt-5">
            <LinkButton href="/contatti" className="bg-accent2 hover:bg-[#dd4e24]">
              Richiedi demo e piano pilot
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
