import * as React from 'react';
import { cn } from '../../lib/cn.js';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
}

/** Red dot with an indigo echo, plus the wordmark. */
export function Logo({ name = 'Pixexl', className, ...props }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3.5 text-xl font-semibold tracking-[-0.02em] text-ink', className)} {...props}>
      <span aria-hidden className="block size-3.5 rounded-full bg-primary shadow-[6px_0_0_var(--color-secondary)]" />
      <span>{name}</span>
    </span>
  );
}
