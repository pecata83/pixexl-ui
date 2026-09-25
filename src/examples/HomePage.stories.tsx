import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Accordion, ArrowRightIcon, Banner, Button, Card, CaseStudyCard, Logo, Nav, ReviewCard, SectionHeader, TrustpilotBadge,
} from '../index';

function HomePage() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Case studies', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav brand={<Logo />} links={links} cta={<Button size="sm">Book a call</Button>} />
      <main className="container-page flex flex-col gap-16 py-16">
        <section className="flex flex-col gap-8">
          <SectionHeader
            size="hero"
            as="h1"
            title={(<><span className="block">Better tools for your team.</span><span className="block text-secondary">Built with AI.</span></>)}
            description="We're Pixexl, an AI development studio. We look at how your business runs, spot where your team gets slowed down, and build AI tools that make their day easier."
          />
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Book a call <ArrowRightIcon /></Button>
            <Button size="lg" variant="secondary" className="min-w-0">See case studies</Button>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <SectionHeader kicker="Case studies" title="Recent work" action={<Button variant="secondary" size="sm">All case studies <ArrowRightIcon /></Button>} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Crete Boat Trips', 'SkyWine', 'ExclusivExplore', 'Nova'].map((n) => (
              <CaseStudyCard key={n} variant="compact" name={n} sector="Travel" href="#" />
            ))}
          </div>
        </section>
        <Card tone="dark" radius="panel" padding="lg">
          <SectionHeader tone="dark" kicker="Where AI helps" title="Sound familiar?" description="If any of these ring a bell, there's probably something worth building." />
        </Card>
        <section className="flex flex-col gap-6">
          <SectionHeader kicker="Reviews" title="What clients say" action={<TrustpilotBadge href="#" score="Excellent" />} />
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (<ReviewCard key={i} quote="Sample review text." name="Reviewer name" company="Company" />))}
          </div>
        </section>
        <section className="grid gap-8 md:grid-cols-3">
          <SectionHeader kicker="FAQ" title="Common questions" />
          <Accordion className="md:col-span-2" items={[
            { question: 'What does an AI business audit involve?', answer: 'Usually one or two weeks of conversations and a written list of ideas.' },
            { question: 'What happens to our data?', answer: 'It stays in your own accounts, under your control.' },
          ]} />
        </section>
        <Banner title="Where could your team use a hand?" action={<Button variant="inverse" size="lg">Book a call <ArrowRightIcon /></Button>} />
      </main>
    </div>
  );
}

const meta = { title: 'Examples/Home page', component: HomePage, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof HomePage>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
