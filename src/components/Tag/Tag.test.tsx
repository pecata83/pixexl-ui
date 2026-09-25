import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders children', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('uses secondary tone by default', () => {
    const { container } = render(<Tag>React</Tag>);
    expect((container.firstChild as HTMLElement).className).toContain('bg-secondary-100');
  });

  it('applies primary tone class', () => {
    const { container } = render(<Tag tone="primary">React</Tag>);
    expect((container.firstChild as HTMLElement).className).toContain('bg-primary-100');
  });

  it('applies neutral tone class', () => {
    const { container } = render(<Tag tone="neutral">React</Tag>);
    expect((container.firstChild as HTMLElement).className).toContain('bg-neutral-200');
  });

  it('applies outline tone class', () => {
    const { container } = render(<Tag tone="outline">React</Tag>);
    expect((container.firstChild as HTMLElement).className).toContain('border-line');
  });

  it('merges custom className', () => {
    const { container } = render(<Tag className="extra">React</Tag>);
    expect((container.firstChild as HTMLElement).className).toContain('extra');
  });
});
