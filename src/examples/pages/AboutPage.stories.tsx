import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteShell } from '../site/SiteShell';
import { AboutPage } from './AboutPage';

function Page() {
  return (
    <SiteShell current="/about">
      <AboutPage />
    </SiteShell>
  );
}

const meta = {
  title: 'Pages/About',
  component: Page,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Page>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Desktop: Story = {};
export const Mobile: Story = { globals: { viewport: { value: 'mobile1', isRotated: false } } };
