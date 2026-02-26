import { siteConfig } from '@/data/site';
import { Container } from '@/components/ui/Container';

export function SocialProof() {
  return (
    <section className="pb-6">
      <Container>
        <div className="rounded-3xl border border-line bg-paper p-5 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">Social proof placeholder</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {siteConfig.socialProof.map((item) => (
              <div key={item} className="rounded-2xl border border-dashed border-line bg-white p-4 text-sm text-ink/70">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
