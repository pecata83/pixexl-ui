import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TimeSlotPicker } from './TimeSlotPicker';

const slots = [
  { id: 'mon-9', day: 'Mon', time: '9:00 AM' },
  { id: 'mon-11', day: 'Mon', time: '11:00 AM' },
  { id: 'tue-2', day: 'Tue', time: '2:00 PM', disabled: true },
];

describe('TimeSlotPicker', () => {
  it('renders all slots as buttons', () => {
    render(<TimeSlotPicker slots={slots} />);
    expect(screen.getByText('9:00 AM')).toBeInTheDocument();
    expect(screen.getByText('11:00 AM')).toBeInTheDocument();
    expect(screen.getByText('2:00 PM')).toBeInTheDocument();
  });

  it('has an accessible group label', () => {
    render(<TimeSlotPicker slots={slots} />);
    expect(screen.getByRole('group', { name: 'Choose a time' })).toBeInTheDocument();
  });

  it('uses a custom label', () => {
    render(<TimeSlotPicker slots={slots} label="Pick a slot" />);
    expect(screen.getByRole('group', { name: 'Pick a slot' })).toBeInTheDocument();
  });

  it('no slot is selected by default', () => {
    render(<TimeSlotPicker slots={slots} />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => expect(btn).toHaveAttribute('aria-pressed', 'false'));
  });

  it('selects a slot on click', async () => {
    render(<TimeSlotPicker slots={slots} />);
    await userEvent.click(screen.getByText('9:00 AM'));
    expect(screen.getByText('9:00 AM').closest('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('deselects previous slot when a new one is clicked', async () => {
    render(<TimeSlotPicker slots={slots} />);
    await userEvent.click(screen.getByText('9:00 AM'));
    await userEvent.click(screen.getByText('11:00 AM'));
    expect(screen.getByText('9:00 AM').closest('button')).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByText('11:00 AM').closest('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('calls onValueChange with the slot id', async () => {
    const onValueChange = vi.fn();
    render(<TimeSlotPicker slots={slots} onValueChange={onValueChange} />);
    await userEvent.click(screen.getByText('9:00 AM'));
    expect(onValueChange).toHaveBeenCalledWith('mon-9');
  });

  it('does not select a disabled slot', async () => {
    render(<TimeSlotPicker slots={slots} />);
    const disabledBtn = screen.getByText('2:00 PM').closest('button') as HTMLButtonElement;
    expect(disabledBtn).toBeDisabled();
  });

  it('respects defaultValue', () => {
    render(<TimeSlotPicker slots={slots} defaultValue="mon-11" />);
    expect(screen.getByText('11:00 AM').closest('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('respects controlled value prop', () => {
    render(<TimeSlotPicker slots={slots} value="mon-9" />);
    expect(screen.getByText('9:00 AM').closest('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders a hidden input when name is provided', () => {
    const { container } = render(<TimeSlotPicker slots={slots} name="timeslot" defaultValue="mon-9" />);
    const input = container.querySelector('input[type="hidden"]') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('timeslot');
    expect(input.value).toBe('mon-9');
  });

  it('does not render a hidden input when name is omitted', () => {
    const { container } = render(<TimeSlotPicker slots={slots} />);
    expect(container.querySelector('input[type="hidden"]')).not.toBeInTheDocument();
  });
});
