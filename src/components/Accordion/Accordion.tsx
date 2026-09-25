'use client';

import * as React from 'react';
import { cn } from '../../lib/cn.js';
import { MinusIcon, PlusIcon } from '../../lib/icons.js';

export interface AccordionItem {
  id?: string;
  question: React.ReactNode;
  answer: React.ReactNode;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Index open on first render. null = all closed. */
  defaultOpenIndex?: number | null;
  /** Heading level used for each question. */
  headingLevel?: 'h2' | 'h3' | 'h4';
}

/** FAQ list. One item open at a time; each item is its own rounded card. */
export function Accordion({ items, defaultOpenIndex = 0, headingLevel: H = 'h3', className, ...props }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpenIndex);
  const baseId = React.useId();
  return (
    <div className={cn('flex flex-col gap-2.5', className)} {...props}>
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = baseId + '-q-' + i;
        const panelId = baseId + '-a-' + i;
        return (
          <div key={item.id ?? i} className="rounded-[20px] border border-line bg-surface px-6">
            <H className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-medium leading-snug text-ink transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span>{item.question}</span>
                {open ? <MinusIcon /> : <PlusIcon />}
              </button>
            </H>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="max-w-[64ch] pb-5 pr-8 text-base leading-relaxed text-neutral-800"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
