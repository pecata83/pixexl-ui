import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteShell } from '../site/SiteShell';
import { CaseStudiesPage } from './CaseStudiesPage';

function Page() {
  return (
    <SiteShell current="/case-studies">
      <CaseStudiesPage />
    </SiteShell>
  );
}

const meta = {
  title: 'Pages/Case studies',
  component: Page,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Page>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Desktop: Story = {};
export const Mobile: Story = { globals: { viewport: { value: 'mobile1', isRotated: false } } };
