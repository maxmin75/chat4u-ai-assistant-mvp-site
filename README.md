# Chat4u AI Assistant MVP Site

Sito marketing completo (landing + pagine servizio) per vendere un MVP AI Assistant testuale + vocale con RAG, costruito con Next.js App Router, TypeScript e Tailwind.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Pagine incluse

- `/` Home/Landing
- `/soluzione`
- `/prezzi`
- `/use-case`
- `/contatti`
- `/contatti/thank-you`
- `/blueprint`
- `/privacy` (placeholder)
- `/cookie` (placeholder)

## Feature UX e conversion

- Header sticky con CTA `Richiedi demo`
- Sezione demo con toggle `Testo / Voce` (mock)
- Timeline roadmap 4 settimane
- Pricing cards + tabella confronto
- FAQ accordion accessibile (aria-expanded/controls)
- CTA distribuite durante lo scroll
- Form lead con validazione base e redirect a thank-you
- Tracking placeholder eventi: `click_demo`, `submit_lead`, `open_pricing`, `faq_open`

## Dati centralizzati

Contenuti e configurazioni principali sono in:

- `data/site.ts`

Puoi modificare copy, FAQ, pricing, use case e stack senza toccare la UI.

## Avvio locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build produzione

```bash
npm run build
npm run start
```

## Deploy su Vercel

1. Crea un repository Git e fai push del progetto.
2. Importa il repo su [Vercel](https://vercel.com).
3. Framework rilevato: Next.js.
4. Build command: `npm run build`.
5. Output: default Next.js.
6. Deploy.

## Note contenuti

- Prezzi, logo, testimonial e PDF blueprint sono placeholder pronti da sostituire.
- Nessun cliente reale e nessun contenuto protetto inserito.
