import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';

const items = [
  { question: 'First?', answer: 'Answer one' },
  { question: 'Second?', answer: 'Answer two' },
];

describe('Accordion', () => {
  it('opens the first item by default', () => {
    render(<Accordion items={items} />);
    expect(screen.getByRole('button', { name: 'First?' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Answer one')).toBeVisible();
    expect(screen.getByText('Answer two')).not.toBeVisible();
  });

  it('keeps one item open at a time', async () => {
    render(<Accordion items={items} />);
    await userEvent.click(screen.getByRole('button', { name: 'Second?' }));
    expect(screen.getByRole('button', { name: 'Second?' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'First?' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes an open item when clicked again', async () => {
    render(<Accordion items={items} />);
    await userEvent.click(screen.getByRole('button', { name: 'First?' }));
    expect(screen.getByRole('button', { name: 'First?' })).toHaveAttribute('aria-expanded', 'false');
  });
});
