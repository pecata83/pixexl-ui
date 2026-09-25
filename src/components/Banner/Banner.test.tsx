import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner', () => {
  it('renders the title', () => {
    render(<Banner title="Get started today" />);
    expect(screen.getByText('Get started today')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Banner title="Title" description="Some description" />);
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });

  it('does not render a description element when omitted', () => {
    render(<Banner title="Title" />);
    expect(screen.queryByText('Some description')).not.toBeInTheDocument();
  });

  it('renders the action slot', () => {
    render(<Banner title="Title" action={<button>Click me</button>} />);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('uses h2 as heading by default', () => {
    render(<Banner title="My Banner" />);
    expect(screen.getByRole('heading', { level: 2, name: 'My Banner' })).toBeInTheDocument();
  });

  it('uses the specified heading level via as prop', () => {
    render(<Banner title="My Banner" as="h3" />);
    expect(screen.getByRole('heading', { level: 3, name: 'My Banner' })).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(<Banner title="Title" className="custom-class" />);
    expect((container.firstChild as HTMLElement).className).toContain('custom-class');
  });
});
