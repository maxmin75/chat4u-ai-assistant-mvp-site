import type { Metadata } from 'next';
import { Sora, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display'
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Chat4u AI Assistant MVP',
    template: '%s | Chat4u AI Assistant MVP'
  },
  description: 'Landing e pagine servizio per MVP AI Assistant testuale + vocale con RAG in 2-4 settimane.',
  openGraph: {
    title: 'Chat4u AI Assistant MVP',
    description: 'Pilot AI Assistant in 2-4 settimane con KPI, logging e handoff umano.',
    url: 'https://example.com',
    siteName: 'Chat4u AI Assistant MVP',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${sora.variable} ${sourceSans.variable}`}>
      <body className="font-[var(--font-body)] text-ink antialiased">
        <div className="bg-grid min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
