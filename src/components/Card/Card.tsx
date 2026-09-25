import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn.js';

export const cardVariants = cva('text-ink', {
  variants: {
    tone: {
      surface: 'border border-line bg-surface',
      outline: 'border border-line bg-transparent',
      dark: 'bg-secondary-800 text-paper',
      primary: 'bg-primary text-paper',
    },
    radius: {
      tile: 'rounded-tile',
      card: 'rounded-card',
      panel: 'rounded-panel',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-7',
      lg: 'p-[clamp(32px,5vw,64px)]',
    },
  },
  defaultVariants: { tone: 'surface', radius: 'card', padding: 'md' },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  as?: 'div' | 'article' | 'section' | 'li' | 'figure';
}

/** Rounded surface with a thin border. Use tone="dark" for the indigo panel. */
export function Card({ as: Comp = 'div', className, tone, radius, padding, ...props }: CardProps) {
  return <Comp className={cn(cardVariants({ tone, radius, padding }), className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('m-0 text-2xl font-semibold leading-tight tracking-[-0.01em]', className)} {...props} />;
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('m-0 text-base leading-relaxed opacity-85', className)} {...props} />;
}
