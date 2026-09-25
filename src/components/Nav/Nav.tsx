'use client';

import * as React from 'react';
import { cn } from '../../lib/cn.js';
import { CloseIcon, MenuIcon, ChevronRightIcon } from '../../lib/icons.js';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  brand: React.ReactNode;
  brandHref?: string;
  /** Links shown in the centre of the bar on desktop. */
  links: NavLinkItem[];
  /** Links for the mobile menu. Defaults to Home + links. */
  mobileLinks?: NavLinkItem[];
  /** Marks the matching link with aria-current="page". Pass usePathname() in Next.js. */
  currentHref?: string;
  /** Right-hand slot, usually a primary Button. */
  cta?: React.ReactNode;
  /** Extra content at the bottom of the mobile menu (email, location). */
  mobileFooter?: React.ReactNode;
  /** Link component to render, e.g. next/link. Defaults to <a>. */
  linkComponent?: React.ElementType;
}

/**
 * Sticky pill navigation. Brand left, links centred, CTA right.
 * Below the md breakpoint the links collapse into a menu button and drop-down panel.
 */
export function Nav({
  brand,
  brandHref = '/',
  links,
  mobileLinks,
  currentHref,
  cta,
  mobileFooter,
  linkComponent: LinkComp = 'a',
  className,
  ...props
}: NavProps) {
  const [open, setOpen] = React.useState(false);
  const menuId = React.useId();
  const allMobile = mobileLinks ?? [{ label: 'Home', href: brandHref }, ...links];

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 48rem)');
    const onMq = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [currentHref]);

  const current = (href: string) => (currentHref === href ? 'page' : undefined);

  return (
    <div className="sticky top-0 z-50 mx-auto w-full max-w-(--container-page) px-[clamp(20px,5vw,72px)] pt-3">
      <nav
        className={cn(
          'grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 rounded-full border border-line bg-paper/80 py-2 pl-6 pr-2 shadow-sm backdrop-blur-md',
          className,
        )}
        {...props}
      >
        <LinkComp href={brandHref} className="justify-self-start text-ink no-underline hover:text-ink">
          {brand}
        </LinkComp>
        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <LinkComp
              key={l.href}
              href={l.href}
              aria-current={current(l.href)}
              className="text-ink no-underline transition-colors hover:text-primary aria-[current=page]:text-primary"
            >
              {l.label}
            </LinkComp>
          ))}
        </div>
        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          {cta}
          <button
            type="button"
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      {open ? (
        <div id={menuId} className="mt-2 flex flex-col rounded-card border border-line bg-paper p-2 shadow-lg md:hidden">
          {allMobile.map((l) => (
            <LinkComp
              key={l.href}
              href={l.href}
              aria-current={current(l.href)}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between rounded-[20px] px-5 text-[22px] font-medium tracking-[-0.01em] text-ink no-underline transition-colors hover:bg-surface hover:text-ink aria-[current=page]:bg-secondary-100 aria-[current=page]:text-secondary-700"
            >
              {l.label}
              <ChevronRightIcon size={18} />
            </LinkComp>
          ))}
          {mobileFooter ? (
            <div className="mt-2 flex flex-col gap-1 border-t border-line px-5 pb-3 pt-4 text-sm text-neutral-700">{mobileFooter}</div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
