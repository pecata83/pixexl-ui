import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Kicker, SectionHeader } from './SectionHeader';

describe('Kicker', () => {
  it('renders children', () => {
    render(<Kicker>Our Work</Kicker>);
    expect(screen.getByText('Our Work')).toBeInTheDocument();
  });
});

describe('SectionHeader', () => {
  it('renders the title', () => {
    render(<SectionHeader title="What we do" />);
    expect(screen.getByText('What we do')).toBeInTheDocument();
  });

  it('renders as h2 by default for section size', () => {
    render(<SectionHeader title="Section Title" />);
    expect(screen.getByRole('heading', { level: 2, name: 'Section Title' })).toBeInTheDocument();
  });

  it('renders as h1 for hero size', () => {
    render(<SectionHeader title="Hero Title" size="hero" />);
    expect(screen.getByRole('heading', { level: 1, name: 'Hero Title' })).toBeInTheDocument();
  });

  it('respects the as prop to override heading level', () => {
    render(<SectionHeader title="My Title" as="h3" />);
    expect(screen.getByRole('heading', { level: 3, name: 'My Title' })).toBeInTheDocument();
  });

  it('renders kicker when provided', () => {
    render(<SectionHeader title="Title" kicker="Services" />);
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<SectionHeader title="Title" description="We make great software" />);
    expect(screen.getByText('We make great software')).toBeInTheDocument();
  });

  it('does not render a description when omitted', () => {
    render(<SectionHeader title="Title" />);
    expect(screen.queryByText('We make great software')).not.toBeInTheDocument();
  });

  it('renders the action slot', () => {
    render(<SectionHeader title="Title" action={<a href="/all">All posts</a>} />);
    expect(screen.getByRole('link', { name: 'All posts' })).toBeInTheDocument();
  });
});
