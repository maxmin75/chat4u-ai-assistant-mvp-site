'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/Buttons';
import { track } from '@/lib/analytics';

type Mode = 'text' | 'voice';

const transcript = {
  text: [
    ['Utente', 'Vorrei aggiornare una prenotazione di domani.'],
    ['Assistant', 'Posso aiutarti: numero prenotazione e nuova fascia oraria?'],
    ['Utente', 'PNR-284 e fascia 18:00-19:00.'],
    ['Assistant', 'Verifico policy e disponibilita. Ti confermo entro pochi secondi.']
  ],
  voice: [
    ['Utente (audio)', 'Trascrizione STT: Ho bisogno di assistenza sulla mia pratica.'],
    ['Assistant', 'Recupero contesto dalla knowledge base e ti rispondo in voce.'],
    ['Assistant (TTS)', 'Ho trovato la procedura corretta, vuoi che ti guidi passo passo?']
  ]
} as const;

export function DemoSection() {
  const [mode, setMode] = useState<Mode>('text');

  const handleToggle = (value: Mode) => {
    setMode(value);
    track('click_demo', { mode: value });
  };

  return (
    <section className="py-12 sm:py-16" id="demo">
      <Container>
        <div className="grid gap-6 rounded-3xl border border-line bg-paper p-6 shadow-card lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">Demo simulata</p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">Testo o voce, stesso controllo operativo</h2>
            <p className="mt-3 max-w-xl text-ink/80">
              Questa UI mostra il flusso MVP: input, retrieval KB, risposta tracciata e fallback. Nessuna promessa magica: pilot,
              misure KPI e miglioramenti iterativi.
            </p>
            <div className="mt-5 inline-flex rounded-full border border-line bg-white p-1">
              <button
                type="button"
                className={`focus-ring rounded-full px-4 py-2 text-sm ${mode === 'text' ? 'bg-accent text-white' : 'text-ink/75'}`}
                onClick={() => handleToggle('text')}
                aria-pressed={mode === 'text'}
              >
                Testo
              </button>
              <button
                type="button"
                className={`focus-ring rounded-full px-4 py-2 text-sm ${mode === 'voice' ? 'bg-accent text-white' : 'text-ink/75'}`}
                onClick={() => handleToggle('voice')}
                aria-pressed={mode === 'voice'}
              >
                Voce
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">Finta UI chat</p>
            <div className="mt-4 space-y-3">
              {transcript[mode].map(([from, text]) => (
                <article key={`${from}-${text}`} className="rounded-xl border border-line/80 p-3 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/60">{from}</p>
                  <p className="mt-1 text-ink/90">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-4">
              <LinkButton href="/contatti" onClick={() => track('click_demo', { origin: 'demo_section' })}>
                Richiedi demo guidata
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
