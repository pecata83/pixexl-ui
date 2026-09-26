'use client';

import * as React from 'react';
import { ArrowRightIcon, Button, Card, Field, Input, Label, OptionGroup, Textarea } from '../../index';
import { site } from '../content/site';

const needs = [
  { value: 'audit', label: 'AI audit' },
  { value: 'chatbot', label: 'Chatbot' },
  { value: 'automation', label: 'Automation' },
  { value: 'website', label: 'New website' },
  { value: 'aeo-geo', label: 'AEO / GEO' },
  { value: 'unsure', label: 'Not sure yet' },
];

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    try {
      // Storybook has no /api/contact route, so this fakes a successful send.
      void data;
      await new Promise((r) => setTimeout(r, 600));
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <Card className="flex flex-col items-start gap-4 p-[clamp(24px,3vw,40px)]" role="status">
        <span aria-hidden className="block size-3 rounded-full bg-primary" />
        <h2 className="m-0 text-3xl">Thanks, got it.</h2>
        <p className="m-0 max-w-[44ch] text-base leading-relaxed">
          We&apos;ll be in touch within a working day to confirm a time and share a video link and a couple of questions so we can prepare.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSent(false)}>
          Send another request
        </Button>
      </Card>
    );
  }

  return (
    <Card as="section" aria-label="Book a call form" className="p-[clamp(20px,3vw,32px)]">
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="c-name">
            <Input id="c-name" name="name" required autoComplete="name" />
          </Field>
          <Field label="Email" htmlFor="c-email">
            <Input id="c-email" name="email" type="email" required autoComplete="email" />
          </Field>
        </div>
        <Field label="Company website" htmlFor="c-site">
          <Input id="c-site" name="website" type="url" placeholder="https://" />
        </Field>
        <div>
          <Label>What do you need?</Label>
          <OptionGroup name="need" label="What do you need?" options={needs} defaultValue="audit" />
        </div>
        <Field label="Anything we should know? (optional)" htmlFor="c-msg">
          <Textarea id="c-msg" name="message" />
        </Field>
        {error && <p className="m-0 text-sm text-red-600">{error}</p>}
        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? 'Sending…' : <> Request this call <ArrowRightIcon /></>}
        </Button>
        <p className="m-0 text-xs text-neutral-700">
          Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </form>
    </Card>
  );
}
