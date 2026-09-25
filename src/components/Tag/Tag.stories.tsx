import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  args: { children: 'Chatbots', tone: 'secondary' },
  argTypes: { tone: { control: 'inline-radio', options: ['secondary', 'primary', 'neutral', 'outline', 'onDark'] } },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllTones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Automation</Tag>
      <Tag tone="primary">New</Tag>
      <Tag tone="neutral">Next.js</Tag>
      <Tag tone="outline">Web</Tag>
    </div>
  ),
};
