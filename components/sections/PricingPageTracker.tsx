'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

export function PricingPageTracker() {
  useEffect(() => {
    track('open_pricing', { source: 'pricing_page_view' });
  }, []);

  return null;
}
