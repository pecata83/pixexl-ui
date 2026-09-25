import type { Meta, StoryObj } from '@storybook/react-vite';
import { Nav } from './Nav';
import { Logo } from './Logo';
import { Button } from '../Button/Button';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const meta = {
  title: 'Components/Nav',
  component: Nav,
  parameters: { layout: 'fullscreen' },
  args: {
    brand: <Logo />,
    links,
    currentHref: '/services',
    cta: <Button size="sm">Book a call</Button>,
    mobileFooter: (<><a href="mailto:hello@pixexl.com">hello@pixexl.com</a><span>United Kingdom</span></>),
  },
  decorators: [(Story) => (<div className="min-h-[520px]"><Story /></div>)],
} satisfies Meta<typeof Nav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {};
export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  globals: { viewport: { value: 'mobile1', isRotated: false } },
};
