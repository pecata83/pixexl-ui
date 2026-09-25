import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OptionGroup } from './OptionGroup';

const options = [
  { value: 'audit', label: 'AI audit' },
  { value: 'chatbot', label: 'Chatbot' },
];

describe('OptionGroup', () => {
  it('checks the first option by default', () => {
    render(<OptionGroup name="need" options={options} />);
    expect(screen.getByRole('radio', { name: 'AI audit' })).toBeChecked();
  });

  it('calls onValueChange with the chosen value', async () => {
    const onValueChange = vi.fn();
    render(<OptionGroup name="need" options={options} onValueChange={onValueChange} />);
    await userEvent.click(screen.getByText('Chatbot'));
    expect(onValueChange).toHaveBeenCalledWith('chatbot');
    expect(screen.getByRole('radio', { name: 'Chatbot' })).toBeChecked();
  });
});
