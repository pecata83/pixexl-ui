import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardTitle, CardBody } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders as a div by default', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('renders as the specified element via as prop', () => {
    const { container } = render(<Card as="article">Content</Card>);
    expect(container.firstChild?.nodeName).toBe('ARTICLE');
  });

  it('merges custom className', () => {
    const { container } = render(<Card className="extra">Content</Card>);
    expect((container.firstChild as HTMLElement).className).toContain('extra');
  });

  it('applies the dark tone class', () => {
    const { container } = render(<Card tone="dark">Content</Card>);
    expect((container.firstChild as HTMLElement).className).toContain('bg-secondary-800');
  });
});

describe('CardTitle', () => {
  it('renders as an h3', () => {
    render(<CardTitle>My Title</CardTitle>);
    expect(screen.getByRole('heading', { level: 3, name: 'My Title' })).toBeInTheDocument();
  });
});

describe('CardBody', () => {
  it('renders children inside a paragraph', () => {
    const { container } = render(<CardBody>Body text</CardBody>);
    expect(container.firstChild?.nodeName).toBe('P');
    expect(screen.getByText('Body text')).toBeInTheDocument();
  });
});
