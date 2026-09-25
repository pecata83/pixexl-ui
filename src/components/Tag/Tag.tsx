import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn.js';

export const tagVariants = cva('inline-flex items-center rounded-full px-2.5 py-1 font-mono text-xs leading-none', {
  variants: {
    tone: {
      secondary: 'bg-secondary-100 text-secondary-800',
      primary: 'bg-primary-100 text-primary-800',
      neutral: 'bg-neutral-200 text-neutral-800',
      outline: 'border border-line text-ink',
      onDark: 'border border-paper/30 text-paper',
    },
  },
  defaultVariants: { tone: 'secondary' },
});

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {}

export function Tag({ className, tone, ...props }: TagProps) {
  return <span className={cn(tagVariants({ tone }), className)} {...props} />;
}
