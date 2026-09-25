import * as React from 'react';
import { cn } from '../../lib/cn.js';
import { ArrowRightIcon, ArrowUpRightIcon } from '../../lib/icons.js';
import { buttonVariants } from '../Button/button-variants.js';
import { Tag } from '../Tag/Tag.js';

export interface CaseStudyCardProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  sector?: string;
  /** Small number shown top-right on the feature layout, e.g. "01". */
  index?: string;
  summary?: React.ReactNode;
  built?: React.ReactNode[];
  tags?: string[];
  /** Custom media node (e.g. next/image). Takes priority over imageSrc. */
  image?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
  /** "feature" = full case study row; "compact" = small preview card for grids. */
  variant?: 'feature' | 'compact';
  /** Print the image in black and white (the house style). */
  grayscale?: boolean;
  linkComponent?: React.ElementType;
}

function Media({ image, imageSrc, imageAlt, name }: Pick<CaseStudyCardProps, 'image' | 'imageSrc' | 'imageAlt' | 'name'>) {
  if (image) return <>{image}</>;
  if (imageSrc) return <img src={imageSrc} alt={imageAlt ?? name} className="block size-full object-cover" />;
  return <div className="grid size-full place-items-center bg-neutral-200 text-sm text-neutral-600">{name}</div>;
}

export function CaseStudyCard({
  name,
  sector,
  index,
  summary,
  built,
  tags,
  image,
  imageSrc,
  imageAlt,
  href,
  linkLabel,
  variant = 'feature',
  grayscale = true,
  linkComponent: LinkComp = 'a',
  className,
  ...props
}: CaseStudyCardProps) {
  const mediaClass = cn('relative overflow-hidden', grayscale && 'grayscale contrast-[1.08]');

  if (variant === 'compact') {
    const inner = (
      <>
        <span className="flex flex-col gap-1">
          {sector ? <span className="font-mono text-xs uppercase tracking-[0.04em] text-neutral-700">{sector}</span> : null}
          <span className="text-[19px] font-semibold tracking-[-0.01em]">{name}</span>
        </span>
        <ArrowRightIcon />
      </>
    );
    const rowClass = 'flex items-end justify-between gap-3 px-2 text-ink no-underline transition-colors hover:text-secondary';
    return (
      <article className={cn('flex flex-col gap-3.5 rounded-tile border border-line bg-surface p-2.5 pb-4.5', className)} {...props}>
        <div className={cn(mediaClass, 'aspect-[4/3] rounded-2xl')}>
          <Media image={image} imageSrc={imageSrc} imageAlt={imageAlt} name={name} />
        </div>
        {href ? (
          <LinkComp href={href} className={rowClass}>
            {inner}
          </LinkComp>
        ) : (
          <div className={rowClass}>{inner}</div>
        )}
      </article>
    );
  }

  return (
    <article
      className={cn(
        'grid grid-cols-1 gap-[clamp(24px,4vw,56px)] rounded-panel border border-line bg-surface p-[clamp(16px,2vw,24px)] md:grid-cols-2',
        className,
      )}
      {...props}
    >
      <div className={cn(mediaClass, 'aspect-[4/3] rounded-[20px] border border-line')}>
        <Media image={image} imageSrc={imageSrc} imageAlt={imageAlt} name={name} />
      </div>
      <div className="flex flex-col gap-5 py-[clamp(8px,2vw,24px)] pr-[clamp(4px,1vw,16px)]">
        {sector || index ? (
          <div className="flex items-baseline justify-between gap-4 font-mono text-[13px]">
            <span className="uppercase tracking-[0.04em] text-neutral-700">{sector}</span>
            <span className="text-neutral-600">{index}</span>
          </div>
        ) : null}
        <h2 className="m-0 text-[clamp(28px,3vw,38px)] font-semibold leading-[1.1] tracking-[-0.02em]">{name}</h2>
        {summary ? <p className="m-0 max-w-[52ch] text-base leading-relaxed text-neutral-800">{summary}</p> : null}
        {built && built.length ? (
          <div className="flex flex-col gap-2.5 border-t border-line pt-4">
            <span className="font-mono text-xs uppercase tracking-[0.04em] text-neutral-700">What we built</span>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {built.map((b, i) => (
                <li key={i} className="flex items-baseline gap-2.5 text-[15px] leading-normal">
                  <span aria-hidden className="block size-1.5 flex-none -translate-y-0.5 rounded-full bg-secondary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {tags && tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        ) : null}
        {href ? (
          <LinkComp
            href={href}
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'mt-auto self-start')}
            {...(LinkComp === 'a' && /^https?:/.test(href) ? { target: '_blank', rel: 'noopener' } : {})}
          >
            {linkLabel ?? 'View project'}
            <ArrowUpRightIcon size={15} />
          </LinkComp>
        ) : null}
      </div>
    </article>
  );
}
