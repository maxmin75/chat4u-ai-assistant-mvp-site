'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { LinkButton } from '@/components/ui/Buttons';
import { Container } from '@/components/ui/Container';
import { track } from '@/lib/analytics';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 glass">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-md text-sm font-extrabold tracking-wide text-ink">
          CHAT4U AI MVP
        </Link>

        <nav aria-label="Navigazione principale" className="hidden items-center gap-5 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md text-sm text-ink/80 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <LinkButton
          href="/contatti"
          className="px-4 py-2"
          onClick={() => track('click_demo', { origin: 'header' })}
        >
          {siteConfig.cta.primary}
        </LinkButton>
      </Container>
    </header>
  );
}
