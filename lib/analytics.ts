export type TrackingEvent =
  | 'click_demo'
  | 'submit_lead'
  | 'open_pricing'
  | 'faq_open';

export function track(event: TrackingEvent, payload?: Record<string, string>) {
  if (typeof window === 'undefined') return;

  (window as Window & { dataLayer?: unknown[] }).dataLayer =
    (window as Window & { dataLayer?: unknown[] }).dataLayer || [];

  (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({
    event,
    ...payload
  });

  // Placeholder tracking until analytics provider is configured.
  console.info('[track]', event, payload ?? {});
}
