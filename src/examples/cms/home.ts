import { shared } from './shared';

export const homePage = {
  meta: {
    /** Title omitted — root layout supplies the default: "Pixexl · AI development studio" */
    description: shared.siteDescription,
  },

  hero: {
    line1: 'Better tools for your team.',
    line2: 'Built with AI.',
    body: "We're Pixexl, an AI development studio. We look at how your business runs, spot where your team gets slowed down, and build AI tools that make their day easier. We also design and build websites that are ready for AI search and easy to plug AI tools into.",
    ctaLabel: 'Book a call',
    ctaHref: '/contact' as const,
  },

  services: {
    kicker: 'Services',
    title: 'Make the everyday work easier.',
    body: "We start by looking at how your business actually runs. Then we build tools that help your team with the repetitive parts, and a website that's ready for how people search and buy now.",
  },

  whereAiHelps: {
    kicker: 'Where AI helps',
    title: 'Sound familiar?',
    description: "If any of these ring a bell, there's probably something worth building. It doesn't have to be a big project.",
  },

  process: {
    kicker: 'Process',
    title: 'How a project usually goes',
  },

  reviews: {
    kicker: 'Reviews',
    title: 'What clients say',
  },

  faq: {
    kicker: 'FAQ',
    title: 'Common questions',
  },
};
