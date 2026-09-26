import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Kept in its own (server-safe) module so server components can style
 * links as buttons: <Link className={buttonVariants({ variant: 'secondary' })} />
 *
 * Text on the red fill is pure white: #fff on primary (#e02d12) is 4.6:1 (WCAG AA).
 */
export const buttonVariants = cva(
  [
    'inline-flex items-center justify-between gap-2 rounded-full font-sans font-semibold leading-tight whitespace-nowrap no-underline',
    'cursor-pointer transition-colors [&_svg]:shrink-0',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    'disabled:cursor-not-allowed disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-600 hover:text-white active:bg-primary-700',
        secondary: 'border border-line bg-transparent text-ink hover:bg-ink/5 hover:text-ink active:bg-ink/10',
        ghost: 'bg-transparent text-secondary-700 hover:bg-secondary/10 hover:text-secondary-700 active:bg-secondary/15',
        inverse: 'border border-white bg-transparent text-white hover:bg-white hover:text-primary',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-[15px]',
        lg: 'h-12 min-w-[200px] px-6 text-[15px]',
        icon: 'size-10 justify-center p-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
