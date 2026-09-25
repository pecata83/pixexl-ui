import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { ArrowRightIcon } from '../../lib/icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Book a call', variant: 'primary', size: 'md' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'inverse'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'icon'] },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'See case studies' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Learn more' } };
export const WithTrailingIcon: Story = {
  args: { size: 'lg', children: (<>Book a call <ArrowRightIcon /></>) },
};
export const Inverse: Story = {
  args: { variant: 'inverse', size: 'lg', children: (<>Book a call <ArrowRightIcon /></>) },
  decorators: [(Story) => (<div className="rounded-panel bg-primary p-10"><Story /></div>)],
};
export const AsLink: Story = {
  args: { asChild: true, variant: 'secondary', children: <a href="#case-studies">All case studies</a> },
};
export const Disabled: Story = { args: { disabled: true } };
