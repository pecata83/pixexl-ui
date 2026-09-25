import type { Meta, StoryObj } from '@storybook/react-vite';
import { OptionGroup } from './OptionGroup';

const meta = {
  title: 'Components/OptionGroup',
  component: OptionGroup,
  args: {
    name: 'need',
    label: 'What do you need?',
    columns: 2,
    options: [
      { value: 'audit', label: 'AI audit' },
      { value: 'chatbot', label: 'Chatbot' },
      { value: 'automation', label: 'Automation' },
      { value: 'website', label: 'New website' },
      { value: 'aeo', label: 'AEO / GEO' },
      { value: 'unsure', label: 'Not sure yet' },
    ],
  },
  argTypes: { columns: { control: 'inline-radio', options: [1, 2, 3] } },
  decorators: [(Story) => (<div className="max-w-md"><Story /></div>)],
} satisfies Meta<typeof OptionGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ThreeColumns: Story = { args: { columns: 3 } };
