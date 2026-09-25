'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/cn.js';
import { buttonVariants, type ButtonVariantProps } from './button-variants.js';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariantProps {
  /** Render the child element (e.g. next/link) with button styles instead of a <button>. */
  asChild?: boolean;
}

/**
 * Pill button. Labels sit flush left; a trailing icon is pushed to the right edge
 * when the button is wider than its content.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...(asChild ? {} : { type: type ?? 'button' })}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
