import * as React from 'react';
import { cn } from '../../lib/cn.js';

export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: 'user' | 'assistant';
}

export function ChatBubble({ from = 'assistant', className, ...props }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        'px-3.5 py-2.5 text-[15px] leading-normal',
        from === 'user'
          ? 'max-w-[80%] self-end rounded-[18px_18px_4px_18px] bg-secondary text-paper'
          : 'max-w-[85%] self-start rounded-[18px_18px_18px_4px] border border-line bg-paper text-ink',
        className,
      )}
      {...props}
    />
  );
}

export interface ChatWindowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  /** Right side of the header, e.g. a timestamp. */
  meta?: React.ReactNode;
  /** Small caption under the conversation. */
  caption?: React.ReactNode;
  online?: boolean;
}

/** Framed conversation, used for chatbot and booking-assistant demos. */
export function ChatWindow({ title, meta, caption, online = true, className, children, ...props }: ChatWindowProps) {
  return (
    <div className={cn('overflow-hidden rounded-card border border-line bg-surface shadow-lg', className)} {...props}>
      <div className="flex items-center justify-between gap-2.5 border-b border-line px-5 py-3.5 text-[13px]">
        <span className="flex items-center gap-2 font-semibold">
          <span aria-hidden className={cn('block size-2 rounded-full', online ? 'bg-success' : 'bg-neutral-400')} />
          {title}
        </span>
        {meta ? <span className="text-neutral-700">{meta}</span> : null}
      </div>
      <div className="flex flex-col gap-3 p-5">{children}</div>
      {caption ? (
        <div className="border-t border-line px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.04em] text-neutral-700">{caption}</div>
      ) : null}
    </div>
  );
}
