'use client';

import * as React from 'react';
import { cn } from '../../lib/cn.js';

export interface TimeSlot {
  id: string;
  day: string;
  time: string;
  disabled?: boolean;
}

export interface TimeSlotPickerProps {
  slots: TimeSlot[];
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (id: string) => void;
  /** Hidden input name, so the choice submits with a form. */
  name?: string;
  label?: string;
  className?: string;
}

export function TimeSlotPicker({ slots, value, defaultValue = null, onValueChange, name, label = 'Choose a time', className }: TimeSlotPickerProps) {
  const [inner, setInner] = React.useState<string | null>(defaultValue);
  const current = value !== undefined ? value : inner;
  return (
    <div role="group" aria-label={label} className={cn('grid grid-cols-[repeat(auto-fill,minmax(118px,1fr))] gap-2', className)}>
      {slots.map((s) => {
        const selected = current === s.id;
        return (
          <button
            key={s.id}
            type="button"
            aria-pressed={selected}
            disabled={s.disabled}
            onClick={() => {
              setInner(s.id);
              onValueChange?.(s.id);
            }}
            className={cn(
              'flex min-h-11 cursor-pointer flex-col items-start rounded-2xl border px-3.5 py-2.5 text-left text-[13px] leading-snug transition-colors',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-45',
              selected ? 'border-primary bg-primary text-paper' : 'border-line bg-paper text-ink hover:border-primary',
            )}
          >
            <span className="font-semibold">{s.day}</span>
            {s.time}
          </button>
        );
      })}
      {name ? <input type="hidden" name={name} value={current ?? ''} /> : null}
    </div>
  );
}
