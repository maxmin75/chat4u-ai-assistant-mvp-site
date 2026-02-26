import { Metadata } from 'next';
import { UseCasesGrid } from '@/components/sections/UseCasesGrid';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata: Metadata = {
  title: 'Use Case'
};

export default function UseCasePage() {
  return (
    <>
      <UseCasesGrid />
      <CtaBand
        title="Prioritizziamo un use case con impatto rapido"
        text="Parti da un singolo processo ad alto volume: misuri valore, poi estendi con meno rischio."
      />
    </>
  );
}
