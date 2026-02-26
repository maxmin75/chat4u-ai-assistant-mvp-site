import Link from 'next/link';
import { ReactNode } from 'react';

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  onClick?: () => void;
  className?: string;
};

export function LinkButton({ href, children, variant = 'primary', onClick, className = '' }: LinkButtonProps) {
  const base =
    'focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5';

  const style =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-[#08694f] shadow-card'
      : 'border border-ink/20 bg-paper text-ink hover:bg-white';

  return (
    <Link href={href} className={`${base} ${style} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
