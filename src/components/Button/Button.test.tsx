import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders a button with type="button" by default', () => {
    render(<Button>Book a call</Button>);
    expect(screen.getByRole('button', { name: 'Book a call' })).toHaveAttribute('type', 'button');
  });

  it('calls onClick', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders its child when asChild is set', () => {
    render(<Button asChild><a href="/contact">Contact</a></Button>);
    const link = screen.getByRole('link', { name: 'Contact' });
    expect(link).toHaveAttribute('href', '/contact');
    expect(link.className).toContain('rounded-full');
  });

  it('merges custom classes', () => {
    render(<Button className="px-10">Wide</Button>);
    const cls = screen.getByRole('button').className;
    expect(cls).toContain('px-10');
    expect(cls).not.toContain('px-5');
  });
});
