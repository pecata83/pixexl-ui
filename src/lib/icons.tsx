import * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 16, strokeWidth = 2, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  };
}

/** Lucide: arrow-right */
export function ArrowRightIcon(props: IconProps) {
  return <svg {...base({ strokeWidth: 2.25, ...props })}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
/** Lucide: arrow-up-right */
export function ArrowUpRightIcon(props: IconProps) {
  return <svg {...base({ strokeWidth: 2.25, ...props })}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}
/** Lucide: chevron-right */
export function ChevronRightIcon(props: IconProps) {
  return <svg {...base(props)}><path d="m9 6 6 6-6 6" /></svg>;
}
/** Lucide: menu */
export function MenuIcon(props: IconProps) {
  return <svg {...base({ size: 18, ...props })}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
}
/** Lucide: x */
export function CloseIcon(props: IconProps) {
  return <svg {...base({ size: 18, ...props })}><path d="M18 6 6 18M6 6l12 12" /></svg>;
}
/** Lucide: plus */
export function PlusIcon(props: IconProps) {
  return <svg {...base({ size: 20, strokeWidth: 2.25, ...props })}><path d="M5 12h14M12 5v14" /></svg>;
}
/** Lucide: minus */
export function MinusIcon(props: IconProps) {
  return <svg {...base({ size: 20, strokeWidth: 2.25, ...props })}><path d="M5 12h14" /></svg>;
}
/** Lucide: facebook */
export function FacebookIcon(props: IconProps) {
  return <svg {...base(props)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
/** Lucide: linkedin */
export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
/** Filled star used by TrustStars */
export function StarIcon({ size = 14, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.5 1.4 6.6L12 17.2l-6 3.3 1.4-6.6-4.9-4.5 6.6-.7z" />
    </svg>
  );
}
