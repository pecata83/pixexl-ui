import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReviewCard, TrustpilotBadge } from './ReviewCard';

const meta = {
  title: 'Components/ReviewCard',
  component: ReviewCard,
  args: {
    quote: 'Sample review. Replace with a real review from your Trustpilot page.',
    name: 'Reviewer name',
    company: 'Company',
    rating: 5,
  },
  argTypes: { rating: { control: { type: 'range', min: 0, max: 5, step: 1 } } },
  decorators: [(Story) => (<div className="max-w-sm"><Story /></div>)],
} satisfies Meta<typeof ReviewCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Badge: Story = {
  render: () => <TrustpilotBadge href="https://www.trustpilot.com/" score="Excellent" />,
};
