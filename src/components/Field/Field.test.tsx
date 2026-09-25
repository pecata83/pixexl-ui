import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label, Input, Textarea, Field } from './Field';

describe('Label', () => {
  it('renders children', () => {
    render(<Label>Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('associates with an input via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <input id="email" />
      </>,
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
});

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  it('forwards the ref', () => {
    let ref: HTMLInputElement | null = null;
    render(<Input ref={(el) => { ref = el; }} />);
    expect(ref).toBeInstanceOf(HTMLInputElement);
  });
});

describe('Textarea', () => {
  it('renders a textarea element', () => {
    render(<Textarea placeholder="Your message" />);
    expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument();
  });
});

describe('Field', () => {
  it('renders a label when provided', () => {
    render(<Field label="Name" htmlFor="name"><input id="name" /></Field>);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('renders a hint when provided', () => {
    render(<Field hint="We won't spam you"><input /></Field>);
    expect(screen.getByText("We won't spam you")).toBeInTheDocument();
  });

  it('renders an error when provided', () => {
    render(<Field error="Required"><input /></Field>);
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('shows error instead of hint when both are provided', () => {
    render(<Field hint="Hint text" error="Error text"><input /></Field>);
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.queryByText('Hint text')).not.toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Field><input placeholder="my-input" /></Field>);
    expect(screen.getByPlaceholderText('my-input')).toBeInTheDocument();
  });
});
