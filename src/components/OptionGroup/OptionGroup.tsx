'use client';

import * as React from 'react';
import { cn } from '../../lib/cn.js';

export interface OptionItem {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface OptionGroupProps {
  name: string;
  options: OptionItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  columns?: 1 | 2 | 3;
  /** Accessible name for the group. */
  label?: string;
  className?: string;
}

const cols = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' } as const;

/** Pill-shaped radio choices built on native inputs. Works inside a <form>. */
export function OptionGroup({ name, options, value, defaultValue, onValueChange, columns = 2, label, className }: OptionGroupProps) {
  const [inner, setInner] = React.useState(defaultValue ?? options[0]?.value);
  const current = value ?? inner;
  return (
    <div role="radiogroup" aria-label={label} className={cn('grid gap-2', cols[columns], className)}>
      {options.map((o) => (
        <label
          key={o.value}
          className={cn(
            'relative flex min-h-11 cursor-pointer items-center rounded-full border border-line px-4 text-sm text-ink transition-colors hover:bg-ink/5',
            'has-checked:border-primary has-checked:bg-primary has-checked:text-paper',
            'has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary',
            o.disabled && 'cursor-not-allowed opacity-45',
          )}
        >
          <input
            type="radio"
            className="sr-only"
            name={name}
            value={o.value}
            checked={current === o.value}
            disabled={o.disabled}
            onChange={() => {
              setInner(o.value);
              onValueChange?.(o.value);
            }}
          />
          {o.label}
        </label>
      ))}
    </div>
  );
}
