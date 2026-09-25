import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChatBubble, ChatWindow } from './Chat';

describe('ChatBubble', () => {
  it('renders children', () => {
    render(<ChatBubble>Hello there</ChatBubble>);
    expect(screen.getByText('Hello there')).toBeInTheDocument();
  });

  it('applies user styles when from="user"', () => {
    const { container } = render(<ChatBubble from="user">Hi</ChatBubble>);
    expect((container.firstChild as HTMLElement).className).toContain('self-end');
  });

  it('applies assistant styles when from="assistant"', () => {
    const { container } = render(<ChatBubble from="assistant">Hi</ChatBubble>);
    expect((container.firstChild as HTMLElement).className).toContain('self-start');
  });

  it('defaults to assistant style', () => {
    const { container } = render(<ChatBubble>Hi</ChatBubble>);
    expect((container.firstChild as HTMLElement).className).toContain('self-start');
  });
});

describe('ChatWindow', () => {
  it('renders the title', () => {
    render(<ChatWindow title="Support Bot" />);
    expect(screen.getByText('Support Bot')).toBeInTheDocument();
  });

  it('renders meta when provided', () => {
    render(<ChatWindow title="Bot" meta="12:45" />);
    expect(screen.getByText('12:45')).toBeInTheDocument();
  });

  it('does not render meta element when omitted', () => {
    render(<ChatWindow title="Bot" />);
    expect(screen.queryByText('12:45')).not.toBeInTheDocument();
  });

  it('renders caption when provided', () => {
    render(<ChatWindow title="Bot" caption="Powered by AI" />);
    expect(screen.getByText('Powered by AI')).toBeInTheDocument();
  });

  it('renders children inside the window', () => {
    render(
      <ChatWindow title="Bot">
        <ChatBubble>Hello</ChatBubble>
      </ChatWindow>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('shows a green online indicator when online', () => {
    const { container } = render(<ChatWindow title="Bot" online />);
    const dot = container.querySelector('[aria-hidden]') as HTMLElement;
    expect(dot.className).toContain('bg-success');
  });

  it('shows a grey indicator when offline', () => {
    const { container } = render(<ChatWindow title="Bot" online={false} />);
    const dot = container.querySelector('[aria-hidden]') as HTMLElement;
    expect(dot.className).toContain('bg-neutral-400');
  });
});
