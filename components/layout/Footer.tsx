import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-line/90 bg-paper/70 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink/70">© {new Date().getFullYear()} Chat4u. MVP AI Assistant con approccio pilot-first.</p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/privacy" className="focus-ring rounded-md text-ink/80 hover:text-ink">
            Privacy
          </Link>
          <Link href="/cookie" className="focus-ring rounded-md text-ink/80 hover:text-ink">
            Cookie
          </Link>
          <Link href="/contatti" className="focus-ring rounded-md text-ink/80 hover:text-ink">
            Richiedi demo
          </Link>
        </div>
      </Container>
    </footer>
  );
}
