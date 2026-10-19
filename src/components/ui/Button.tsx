import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'gold' | 'outline' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
};

export function Button({ children, href, onClick, variant = 'gold', className, type = 'button' }: ButtonProps) {
  const reduce = useReducedMotion();
  const base =
    'group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 overflow-hidden rounded-full';
  const styles = {
    gold: 'bg-[#c8a96a] text-[#0b0a09] hover:bg-[#ecd6a3]',
    outline: 'border border-[#c8a96a]/50 text-[#f7f2e8] hover:border-[#c8a96a] hover:text-[#c8a96a]',
    ghost: 'text-[#f7f2e8]/80 hover:text-[#c8a96a]',
  }[variant];

  const content = (
    <>
      {variant === 'gold' && !reduce && (
        <span className="pointer-events-none absolute inset-0 animate-shimmer opacity-60" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = reduce
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.97 },
      };

  if (href) {
    return (
      <motion.a href={href} className={cn(base, styles, className)} {...motionProps}>
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button type={type} onClick={onClick} className={cn(base, styles, className)} {...motionProps}>
      {content}
    </motion.button>
  );
}
