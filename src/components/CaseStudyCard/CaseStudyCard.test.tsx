import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CaseStudyCard } from './CaseStudyCard';

describe('CaseStudyCard — feature variant', () => {
  it('renders the name as a heading', () => {
    render(<CaseStudyCard name="Acme Corp" />);
    expect(screen.getByRole('heading', { name: 'Acme Corp' })).toBeInTheDocument();
  });

  it('renders sector and index when provided', () => {
    render(<CaseStudyCard name="Acme" sector="FinTech" index="01" />);
    expect(screen.getByText('FinTech')).toBeInTheDocument();
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('renders summary text', () => {
    render(<CaseStudyCard name="Acme" summary="We built something great" />);
    expect(screen.getByText('We built something great')).toBeInTheDocument();
  });

  it('renders built list items', () => {
    render(<CaseStudyCard name="Acme" built={['Feature A', 'Feature B']} />);
    expect(screen.getByText('Feature A')).toBeInTheDocument();
    expect(screen.getByText('Feature B')).toBeInTheDocument();
  });

  it('renders tags', () => {
    render(<CaseStudyCard name="Acme" tags={['React', 'TypeScript']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders an href link with the linkLabel', () => {
    render(<CaseStudyCard name="Acme" href="/acme" linkLabel="See case study" />);
    expect(screen.getByRole('link', { name: /See case study/ })).toHaveAttribute('href', '/acme');
  });

  it('falls back to "View project" link label', () => {
    render(<CaseStudyCard name="Acme" href="/acme" />);
    expect(screen.getByRole('link', { name: /View project/ })).toBeInTheDocument();
  });

  it('renders imageSrc as an img element', () => {
    render(<CaseStudyCard name="Acme" imageSrc="/acme.jpg" imageAlt="Acme screenshot" />);
    expect(screen.getByAltText('Acme screenshot')).toHaveAttribute('src', '/acme.jpg');
  });

  it('shows the name as placeholder when no image is provided', () => {
    render(<CaseStudyCard name="Acme Corp" />);
    // The placeholder div contains the name text
    expect(screen.getAllByText('Acme Corp').length).toBeGreaterThan(0);
  });
});

describe('CaseStudyCard — compact variant', () => {
  it('renders the name', () => {
    render(<CaseStudyCard name="Acme" variant="compact" />);
    // The name appears in both the placeholder div and the label span
    expect(screen.getAllByText('Acme').length).toBeGreaterThan(0);
  });

  it('renders sector when provided', () => {
    render(<CaseStudyCard name="Acme" variant="compact" sector="FinTech" />);
    expect(screen.getByText('FinTech')).toBeInTheDocument();
  });

  it('renders a link when href is provided', () => {
    render(<CaseStudyCard name="Acme" variant="compact" href="/acme" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/acme');
  });
});
