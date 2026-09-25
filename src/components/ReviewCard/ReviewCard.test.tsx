import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TrustStars, ReviewCard, TrustpilotBadge } from './ReviewCard';

describe('TrustStars', () => {
  it('has an accessible label showing the rating', () => {
    render(<TrustStars rating={4} />);
    expect(screen.getByRole('img', { name: '4 out of 5 stars' })).toBeInTheDocument();
  });

  it('defaults to 5 stars', () => {
    render(<TrustStars />);
    expect(screen.getByRole('img', { name: '5 out of 5 stars' })).toBeInTheDocument();
  });

  it('clamps the filled stars to 5 when rating exceeds 5', () => {
    // aria-label reflects the raw prop; the visual clamping is what we verify via filled stars
    render(<TrustStars rating={10} />);
    // All 5 rendered stars should be filled (bg-trustpilot)
    const { container } = render(<TrustStars rating={10} />);
    const stars = container.querySelectorAll('span[style]');
    const filled = Array.from(stars).filter((s) => (s as HTMLElement).className.includes('bg-trustpilot'));
    expect(filled).toHaveLength(5);
  });

  it('clamps the filled stars to 0 when rating is below 0', () => {
    const { container } = render(<TrustStars rating={-1} />);
    const stars = container.querySelectorAll('span[style]');
    const filled = Array.from(stars).filter((s) => (s as HTMLElement).className.includes('bg-trustpilot'));
    expect(filled).toHaveLength(0);
  });
});

describe('ReviewCard', () => {
  it('renders the quote', () => {
    render(<ReviewCard quote="Amazing service" name="Jane Doe" />);
    expect(screen.getByText('Amazing service')).toBeInTheDocument();
  });

  it('renders the reviewer name', () => {
    render(<ReviewCard quote="Great!" name="Jane Doe" />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders the company when provided', () => {
    render(<ReviewCard quote="Great!" name="Jane Doe" company="Acme Ltd" />);
    expect(screen.getByText('Acme Ltd')).toBeInTheDocument();
  });

  it('shows the first letter of the name as avatar fallback', () => {
    render(<ReviewCard quote="Great!" name="Jane Doe" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders a custom avatar when provided', () => {
    render(<ReviewCard quote="Great!" name="Jane Doe" avatar={<img src="/avatar.jpg" alt="Jane" />} />);
    expect(screen.getByAltText('Jane')).toBeInTheDocument();
    expect(screen.queryByText('J')).not.toBeInTheDocument();
  });
});

describe('TrustpilotBadge', () => {
  it('renders the score text', () => {
    render(<TrustpilotBadge score="Excellent" href="https://trustpilot.com" />);
    expect(screen.getByText('Excellent')).toBeInTheDocument();
    expect(screen.getByText('on Trustpilot')).toBeInTheDocument();
  });

  it('is a link with the provided href', () => {
    render(<TrustpilotBadge score="4.9" href="https://trustpilot.com/review/example" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://trustpilot.com/review/example');
  });

  it('opens in a new tab by default', () => {
    render(<TrustpilotBadge score="4.9" href="https://trustpilot.com" />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
});
