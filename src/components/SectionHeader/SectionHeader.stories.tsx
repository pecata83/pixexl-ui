import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from './SectionHeader';
import { Button } from '../Button/Button';
import { ArrowRightIcon } from '../../lib/icons';

const meta = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  args: { kicker: 'Services', title: 'Make the everyday work easier.', size: 'section' },
  argTypes: { size: { control: 'inline-radio', options: ['hero', 'page', 'section'] } },
} satisfies Meta<typeof SectionHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Section: Story = {};
export const WithAction: Story = {
  args: {
    kicker: 'Case studies',
    title: 'Recent work',
    action: (<Button variant="secondary" size="sm">All case studies <ArrowRightIcon /></Button>),
  },
};
export const Page: Story = {
  args: {
    size: 'page',
    kicker: 'About',
    title: 'An AI studio that starts with people.',
    description: 'Pixexl is an AI development studio based in the UK.',
  },
};
export const Hero: Story = {
  args: {
    size: 'hero',
    kicker: undefined,
    title: (<><span className="block">Better tools for your team.</span><span className="block text-secondary">Built with AI.</span></>),
  },
};
