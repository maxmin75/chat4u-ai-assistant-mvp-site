'use client';

import { FormEvent, useState } from 'react';
import { track } from '@/lib/analytics';

export function BlueprintGate() {
  const [unlocked, setUnlocked] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUnlocked(true);
    track('submit_lead', { source: 'blueprint_gate' });
  };

  return (
    <div className="rounded-3xl border border-line bg-paper p-6 shadow-card">
      <h3 className="font-[var(--font-display)] text-2xl font-semibold">Scarica il blueprint operativo (mock)</h3>
      <p className="mt-2 text-sm text-ink/80">Contiene schema DB, endpoint API, prompt template e checklist GDPR.</p>

      {!unlocked ? (
        <form className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={onSubmit}>
          <input name="name" placeholder="Nome" required className="focus-ring rounded-xl border border-line bg-white px-4 py-3" />
          <input
            name="email"
            type="email"
            placeholder="Email lavoro"
            required
            className="focus-ring rounded-xl border border-line bg-white px-4 py-3"
          />
          <div className="sm:col-span-2">
            <button type="submit" className="focus-ring rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-[#08694f]">
              Sblocca download
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-line bg-white p-4 text-sm">
          Download pronto: <a href="#" className="underline">blueprint-ai-assistant-mvp.pdf</a> (placeholder)
        </div>
      )}
    </div>
  );
}
