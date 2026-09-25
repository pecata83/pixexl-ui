import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { Button } from '../Button/Button';
import { ArrowRightIcon } from '../../lib/icons';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    title: 'Where could your team use a hand?',
    tone: 'primary',
    action: (<Button variant="inverse" size="lg">Book a call <ArrowRightIcon /></Button>),
  },
  argTypes: { tone: { control: 'inline-radio', options: ['primary', 'secondary', 'ink'] } },
} satisfies Meta<typeof Banner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { tone: 'secondary' } };
