import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn.js';

export const bannerVariants = cva('flex flex-col items-start gap-9 rounded-panel p-[clamp(40px,6vw,80px)] text-paper', {
  variants: {
    tone: {
      primary: 'bg-primary',
      secondary: 'bg-secondary-800',
      ink: 'bg-ink',
    },
  },
  defaultVariants: { tone: 'primary' },
});

export interface BannerProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>, VariantProps<typeof bannerVariants> {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Usually <Button variant="inverse" size="lg">. */
  action?: React.ReactNode;
  as?: 'h2' | 'h3';
}

/** Closing call-to-action panel. Display-size type only on the coloured field. */
export function Banner({ title, description, action, tone, as: Heading = 'h2', className, ...props }: BannerProps) {
  return (
    <section className={cn(bannerVariants({ tone }), className)} {...props}>
      <div className="flex flex-col gap-4">
        <Heading className="m-0 text-[clamp(40px,5.4vw,72px)] font-semibold leading-[1.03] tracking-[-0.03em]">{title}</Heading>
        {description ? <p className="m-0 max-w-[48ch] text-lg leading-relaxed">{description}</p> : null}
      </div>
      {action}
    </section>
  );
}
