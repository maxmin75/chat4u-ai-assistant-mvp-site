export const siteConfig = {
  brand: {
    name: 'Chat4u AI Assistant MVP',
    tagline: 'Assistant testuale + vocale, pronto in 2-4 settimane'
  },
  cta: {
    primary: 'Richiedi demo',
    secondary: 'Vedi prezzi Pilot'
  },
  nav: [
    { label: 'Soluzione', href: '/soluzione' },
    { label: 'Prezzi', href: '/prezzi' },
    { label: 'Use Case', href: '/use-case' },
    { label: 'Blueprint', href: '/blueprint' },
    { label: 'Contatti', href: '/contatti' }
  ],
  heroBullets: [
    'Pilot in 2-4 settimane con KPI e handoff umano',
    'RAG su knowledge base aziendale con logging completo',
    'Canale chat + voce STT/LLM/TTS in streaming'
  ],
  socialProof: [
    'Logo cliente placeholder',
    'Case studio placeholder',
    'Partner tecnico placeholder'
  ],
  timeline: [
    {
      week: 'Settimana 1',
      title: 'Discovery + Prompt + KB ingest',
      items: ['Mappa intent', 'Regole brand tone', 'Ingest documenti in vector DB']
    },
    {
      week: 'Settimana 2',
      title: 'Chat + RAG + dashboard log',
      items: ['Flusso Q&A', 'Top-k retrieval', 'Monitoraggio fallback e rating']
    },
    {
      week: 'Settimana 3',
      title: 'Voice pipeline STT/TTS',
      items: ['Input audio', 'Risposta vocale streaming', 'Policy e guardrail dedicati']
    },
    {
      week: 'Settimana 4',
      title: 'Hardening + go-live pilota',
      items: ['Test set KPI', 'Sicurezza e GDPR checklist', 'Rollout pilot controllato']
    }
  ],
  deliverables: [
    'Chat brandizzata multi-canale',
    'Assistant vocale con STT/TTS',
    'Pannello log, fallback e feedback',
    'Test set KPI (accuratezza, tono, latenza, handoff umano)'
  ],
  stack: {
    frontend: ['Next.js App Router', 'Tailwind CSS', 'TypeScript'],
    backend: ['Node.js (Nest/Express)', 'API LLM GPT-like', 'Policy & Guardrail layer'],
    data: ['Postgres (utenti, sessioni, log)', 'Vector DB (pgvector/Pinecone/Weaviate)', 'Embedding pipeline'],
    voiceOps: ['STT -> LLM/RAG -> TTS streaming', 'Docker', 'Deploy AWS/GCP/Vercel', 'Sentry + metriche']
  },
  pricing: [
    {
      plan: 'Pilot / MVP',
      price: 'Da definire',
      subtitle: 'Per validare use case e KPI in 2-4 settimane',
      includes: ['1 use case prioritario', 'Chat + RAG', 'Dashboard log base', 'Supporto go-live pilot'],
      cta: 'Parti dal Pilot'
    },
    {
      plan: 'Growth',
      price: 'Da definire',
      subtitle: 'Per estendere copertura e qualità operativa',
      includes: ['2-3 use case', 'Voice channel', 'Prompt optimization continuo', 'Monitoring e QA iterativo'],
      cta: 'Scala il progetto'
    },
    {
      plan: 'Enterprise',
      price: 'Da definire',
      subtitle: 'Per team con requisiti security/compliance avanzati',
      includes: ['Architettura custom', 'SLA e governance', 'Integrazioni sistemi interni', 'Roadmap multi-country'],
      cta: 'Parla con un Solution Lead'
    }
  ],
  pricingCompare: [
    { feature: 'Timeline', pilot: '2-4 settimane', growth: '4-8 settimane', enterprise: 'Da definire' },
    { feature: 'Canali', pilot: 'Testo', growth: 'Testo + Voce', enterprise: 'Omnicanale' },
    { feature: 'RAG/KB', pilot: 'KB essenziale', growth: 'KB estesa + versioning', enterprise: 'Federata multi-fonte' },
    { feature: 'Controllo & KPI', pilot: 'Dashboard base', growth: 'KPI avanzati', enterprise: 'Governance completa' }
  ],
  useCases: [
    {
      title: 'Supporto clienti',
      desc: 'Riduce first response time su FAQ e processi ricorrenti, con handoff umano sui casi complessi.'
    },
    {
      title: 'Booking e prenotazioni',
      desc: 'Raccoglie vincoli, propone slot e conferma dati in modo coerente con policy aziendali.'
    },
    {
      title: 'Lead qualification',
      desc: 'Filtra richieste, calcola priorita commerciale e passa lead caldi al team sales.'
    },
    {
      title: 'HR pre-screening',
      desc: 'Gestisce domande base candidati, raccoglie disponibilita e instrada recruiter.'
    },
    {
      title: 'Knowledge interno',
      desc: 'Interroga documentazione tecnica/procedure interne riducendo tempo perso nella ricerca.'
    }
  ],
  faqs: [
    {
      q: 'In 2-4 settimane cosa e realmente pronto?',
      a: 'Un MVP operativo con chat, RAG su KB iniziale e tracking di log/KPI. Il canale voce entra nella roadmap standard entro la quarta settimana.'
    },
    {
      q: 'Come gestite il rischio di risposte errate?',
      a: 'Definiamo guardrail, retrieval controllato, fallback e handoff umano. Misuriamo KPI di accuratezza e latenza su test set dedicato.'
    },
    {
      q: 'Quali costi ricorrenti devo aspettarmi?',
      a: 'Token LLM, STT/TTS, hosting e vector DB. Per ridurre spesa: KB piccola iniziale, caching FAQ e limiti sessione.'
    },
    {
      q: 'E compatibile con GDPR?',
      a: 'Si, partiamo con data minimization, logging governato, consenso e checklist GDPR. I dettagli finali dipendono dal tuo caso d uso.'
    }
  ]
};

export type SiteConfig = typeof siteConfig;
