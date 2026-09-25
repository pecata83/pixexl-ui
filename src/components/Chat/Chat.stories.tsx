import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatBubble, ChatWindow } from './Chat';

const meta = {
  title: 'Components/Chat',
  component: ChatWindow,
  args: { title: 'Booking assistant', meta: 'Sun 23:04', caption: 'Illustration of a booking assistant' },
  render: (args) => (
    <ChatWindow {...args} className="max-w-md">
      <ChatBubble from="user">Hi, do you have space for 6 on Saturday's sunset trip?</ChatBubble>
      <ChatBubble>Yes, there are 8 places left on Saturday's 18:30 sunset trip. Shall I hold 6 for you?</ChatBubble>
      <ChatBubble from="user">Yes please!</ChatBubble>
      <ChatBubble>Done. I've sent the confirmation and payment link to your email.</ChatBubble>
    </ChatWindow>
  ),
} satisfies Meta<typeof ChatWindow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Conversation: Story = {};
