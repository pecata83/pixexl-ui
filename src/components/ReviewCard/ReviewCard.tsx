import * as React from 'react';
import { cn } from '../../lib/cn.js';
import { StarIcon } from '../../lib/icons.js';

export interface TrustStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0 to 5, rounded to the nearest whole star. */
  rating?: number;
  size?: number;
}

/** Trustpilot-style green star row. */
export function TrustStars({ rating = 5, size = 22, className, ...props }: TrustStarsProps) {
  const filled = Math.round(Math.max(0, Math.min(5, rating)));
  return (
    <div role="img" aria-label={rating + ' out of 5 stars'} className={cn('flex gap-[3px]', className)} {...props}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={cn('grid place-items-center rounded-[4px] text-white', i < filled ? 'bg-trustpilot' : 'bg-neutral-300')}
          style={{ width: size, height: size }}
        >
          <StarIcon size={Math.round(size * 0.64)} />
        </span>
      ))}
    </div>
  );
}

export interface ReviewCardProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  name: string;
  company?: string;
  rating?: number;
  /** Optional avatar node; defaults to the first letter of name. */
  avatar?: React.ReactNode;
}

export function ReviewCard({ quote, name, company, rating = 5, avatar, className, ...props }: ReviewCardProps) {
  return (
    <figure className={cn('m-0 flex flex-col gap-4.5 rounded-tile border border-line bg-surface p-7', className)} {...props}>
      <TrustStars rating={rating} />
      <blockquote className="m-0 flex-1 text-[17px] leading-relaxed text-ink">{quote}</blockquote>
      <figcaption className="m-0 flex items-center gap-3 text-sm text-ink">
        {avatar ?? (
          <span aria-hidden className="grid size-9 place-items-center rounded-full bg-secondary-100 font-semibold text-secondary-700">
            {name.charAt(0)}
          </span>
        )}
        <span className="flex flex-col">
          <strong className="font-semibold">{name}</strong>
          {company ? <span className="text-neutral-700">{company}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}

export interface TrustpilotBadgeProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** e.g. "Excellent" or "4.9" */
  score: string;
  rating?: number;
}

/** Pill link to your Trustpilot profile. */
export function TrustpilotBadge({ score, rating = 5, className, target = '_blank', rel = 'noopener', ...props }: TrustpilotBadgeProps) {
  return (
    <a
      target={target}
      rel={rel}
      className={cn(
        'inline-flex items-center gap-3.5 rounded-full border border-line bg-surface py-2.5 pl-3 pr-4.5 text-ink no-underline transition-colors hover:border-trustpilot hover:text-ink',
        className,
      )}
      {...props}
    >
      <TrustStars rating={rating} />
      <span className="text-sm leading-snug">
        <strong className="font-semibold">{score}</strong> on Trustpilot
      </span>
    </a>
  );
}
