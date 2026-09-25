import type { Meta, StoryObj } from '@storybook/react-vite';
import { CaseStudyCard } from './CaseStudyCard';

const meta = {
  title: 'Components/CaseStudyCard',
  component: CaseStudyCard,
  args: {
    name: 'Crete Boat Trips',
    sector: 'Travel · Crete',
    index: '01',
    summary: 'A booking platform for private boat trips, sunset cruises and boat rentals across Crete.',
    built: ['Trip and boat-rental listings', 'Guides to beaches, sights and ports', 'Reviews, favourites, cart and WhatsApp contact'],
    tags: ['Next.js', 'Booking platform', 'Content & SEO'],
    href: 'https://creteboattrips.com/',
    linkLabel: 'Visit creteboattrips.com',
    variant: 'feature',
  },
  argTypes: { variant: { control: 'inline-radio', options: ['feature', 'compact'] } },
} satisfies Meta<typeof CaseStudyCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Feature: Story = {};
export const Compact: Story = {
  args: { variant: 'compact', href: '#' },
  decorators: [(Story) => (<div className="max-w-xs"><Story /></div>)],
};
