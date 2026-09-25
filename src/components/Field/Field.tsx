import * as React from 'react';
import { cn } from '../../lib/cn.js';

const control =
  'w-full rounded-[14px] border border-line bg-paper px-3 font-sans text-sm text-ink caret-primary transition-colors placeholder:text-neutral-500 hover:border-ink/45 focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/20 disabled:cursor-not-allowed disabled:opacity-45 aria-invalid:border-primary';

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => <label ref={ref} className={cn('mb-1.5 block text-xs text-ink/70', className)} {...props} />,
);
Label.displayName = 'Label';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(control, 'min-h-11', className)} {...props} />,
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => <textarea ref={ref} className={cn(control, 'min-h-24 resize-y py-2.5', className)} {...props} />,
);
Textarea.displayName = 'Textarea';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}

/** Label + control + hint/error, stacked. */
export function Field({ label, htmlFor, hint, error, className, children, ...props }: FieldProps) {
  return (
    <div className={cn('flex flex-col', className)} {...props}>
      {label ? <Label htmlFor={htmlFor}>{label}</Label> : null}
      {children}
      {error ? (
        <p className="mb-0 mt-1.5 text-xs text-primary-700">{error}</p>
      ) : hint ? (
        <p className="mb-0 mt-1.5 text-xs text-neutral-700">{hint}</p>
      ) : null}
    </div>
  );
}
