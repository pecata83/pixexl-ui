import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardBody, CardTitle } from './Card';
import { Kicker } from '../SectionHeader/SectionHeader';

const meta = {
  title: 'Components/Card',
  component: Card,
  args: { tone: 'surface', radius: 'card', padding: 'md' },
  argTypes: {
    tone: { control: 'inline-radio', options: ['surface', 'outline', 'dark', 'primary'] },
    radius: { control: 'inline-radio', options: ['tile', 'card', 'panel'] },
    padding: { control: 'inline-radio', options: ['none', 'sm', 'md', 'lg'] },
  },
  render: (args) => (
    <Card {...args} className="max-w-md">
      <span className="font-mono text-[13px] text-secondary-600">01</span>
      <CardTitle className="mt-3">People stay in charge</CardTitle>
      <CardBody className="mt-3">We build AI to help your team, not to replace anyone. Every tool has a person responsible for it.</CardBody>
    </Card>
  ),
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Surface: Story = {};
export const DarkPanel: Story = {
  args: { tone: 'dark', radius: 'panel', padding: 'lg' },
  render: (args) => (
    <Card {...args}>
      <Kicker tone="dark">Where AI helps</Kicker>
      <h2 className="m-0 text-4xl">Sound familiar?</h2>
      <p className="mb-0 mt-4 max-w-[40ch] text-secondary-200">If any of these ring a bell, there's probably something worth building.</p>
    </Card>
  ),
};
