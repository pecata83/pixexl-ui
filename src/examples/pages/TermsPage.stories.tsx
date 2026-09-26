import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteShell } from '../site/SiteShell';
import { TermsPage } from './TermsPage';

function Page() {
  return (
    <SiteShell>
      <TermsPage />
    </SiteShell>
  );
}

const meta = {
  title: 'Pages/Terms of Service',
  component: Page,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Page>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Desktop: Story = {};
export const Mobile: Story = { globals: { viewport: { value: 'mobile1', isRotated: false } } };
