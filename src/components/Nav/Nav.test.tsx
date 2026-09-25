import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Nav } from './Nav';

describe('Nav', () => {
  it('toggles the mobile menu', async () => {
    render(<Nav brand="Pixexl" links={[{ label: 'About', href: '/about' }]} />);
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument();
  });

  it('marks the current link', () => {
    render(<Nav brand="Pixexl" links={[{ label: 'About', href: '/about' }]} currentHref="/about" />);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
  });
});
