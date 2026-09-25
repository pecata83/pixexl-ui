import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimeSlotPicker } from './TimeSlotPicker';

const days = ['Mon 5 Oct', 'Tue 6 Oct', 'Wed 7 Oct', 'Thu 8 Oct'];
const slots = days.flatMap((day, i) => [
  { id: 'd' + i + '-am', day, time: '10:00' },
  { id: 'd' + i + '-pm', day, time: '14:30', disabled: i === 2 },
]);

const meta = {
  title: 'Components/TimeSlotPicker',
  component: TimeSlotPicker,
  args: { slots, defaultValue: 'd1-am', name: 'slot' },
  decorators: [(Story) => (<div className="max-w-xl"><Story /></div>)],
} satisfies Meta<typeof TimeSlotPicker>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
