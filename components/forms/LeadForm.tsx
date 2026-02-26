'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { track } from '@/lib/analytics';

type Props = {
  source?: string;
};

export function LeadForm({ source = 'contact_page' }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string>('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const consent = formData.get('consent');

    if (!name || !email || !company || !consent) {
      setError('Compila nome, email, azienda e consenso privacy per procedere.');
      return;
    }

    setError('');
    track('submit_lead', { source });
    router.push('/contatti/thank-you');
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-semibold">
          Nome e cognome
        </label>
        <input
          id="name"
          name="name"
          required
          className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-3"
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold">
          Email lavoro
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-3"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-semibold">
          Azienda
        </label>
        <input
          id="company"
          name="company"
          required
          className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-3"
          autoComplete="organization"
        />
      </div>

      <div>
        <label htmlFor="notes" className="mb-1 block text-sm font-semibold">
          Note sul caso d uso
        </label>
        <textarea id="notes" name="notes" rows={4} className="focus-ring w-full rounded-xl border border-line bg-white px-4 py-3" />
      </div>

      <label className="flex items-start gap-2 text-sm text-ink/80">
        <input type="checkbox" name="consent" className="mt-1" required />
        Acconsento al trattamento dati secondo informativa privacy (placeholder).
      </label>

      {error && (
        <p role="alert" className="rounded-lg border border-[#db7848] bg-[#fff1ea] p-3 text-sm text-[#8a3515]">
          {error}
        </p>
      )}

      <button type="submit" className="focus-ring rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-[#08694f]">
        Invia richiesta demo
      </button>
    </form>
  );
}
