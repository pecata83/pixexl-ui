import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    items: [
      { question: 'What does an AI business audit involve?', answer: 'We talk to a few people, look at the tools you use and what slows people down, then give you a written list of ideas.' },
      { question: 'Will a chatbot annoy our customers?', answer: "Not if it's done properly. Ours only answer from your own information and hand over to a person when they should." },
      { question: 'What happens to our data?', answer: 'We build on your own accounts, so your data stays under your control.' },
    ],
  },
  decorators: [(Story) => (<div className="max-w-2xl"><Story /></div>)],
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllClosed: Story = { args: { defaultOpenIndex: null } };
