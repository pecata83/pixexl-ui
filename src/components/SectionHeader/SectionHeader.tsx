import * as React from 'react';
import { cn } from '../../lib/cn.js';

export interface KickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'light' | 'dark';
}

/** Small mono uppercase label that sits above a heading. */
export function Kicker({ className, tone = 'light', ...props }: KickerProps) {
  return (
    <span
      className={cn(
        'mb-3.5 block font-mono text-[13px] uppercase tracking-[0.04em]',
        tone === 'dark' ? 'text-secondary-300' : 'text-secondary-600',
        className,
      )}
      {...props}
    />
  );
}

const titleSizes = {
  hero: 'text-[clamp(44px,7vw,96px)] leading-[1.02] tracking-[-0.03em]',
  page: 'text-[clamp(44px,6vw,84px)] leading-[1.02] tracking-[-0.03em]',
  section: 'text-[clamp(30px,3.6vw,44px)] leading-[1.08] tracking-[-0.02em]',
} as const;

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Right-aligned slot, e.g. an "All case studies" button. */
  action?: React.ReactNode;
  size?: keyof typeof titleSizes;
  as?: 'h1' | 'h2' | 'h3';
  tone?: 'light' | 'dark';
}

export function SectionHeader({
  kicker,
  title,
  description,
  action,
  size = 'section',
  as,
  tone = 'light',
  className,
  ...props
}: SectionHeaderProps) {
  const Heading = as ?? (size === 'section' ? 'h2' : 'h1');
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-x-6 gap-y-4', className)} {...props}>
      <div className="min-w-0 max-w-[60ch]">
        {kicker ? <Kicker tone={tone}>{kicker}</Kicker> : null}
        <Heading className={cn('m-0 font-semibold', titleSizes[size])}>{title}</Heading>
        {description ? (
          <p
            className={cn(
              'mb-0 mt-6 max-w-[56ch] text-lg leading-relaxed',
              tone === 'dark' ? 'text-secondary-200' : 'text-ink',
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
