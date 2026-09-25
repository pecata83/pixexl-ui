import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field, Input, Textarea } from './Field';

const meta = {
  title: 'Components/Field',
  component: Field,
  args: { label: 'Company website', htmlFor: 'site', hint: 'Optional' },
  render: (args) => (
    <Field {...args} className="max-w-sm">
      <Input id="site" placeholder="https://" aria-invalid={args.error ? true : undefined} />
    </Field>
  ),
} satisfies Meta<typeof Field>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = { args: { label: 'Email', hint: undefined, error: 'Please enter a valid email.' } };
export const TextareaField: Story = {
  render: () => (
    <Field label="Anything we should know? (optional)" htmlFor="msg" className="max-w-md">
      <Textarea id="msg" />
    </Field>
  ),
};
