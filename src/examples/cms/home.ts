import { shared } from './shared';

export const homePage = {
  meta: {
    /** Shares key terms with the H1 ("Better tools for your team"). */
    title: 'Better AI tools for your team | Pixexl, London',
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
    description: "If any of these ring a bell, there's probably something worth building. It doesn't have to be a big project. Each of these is a repetitive task that workflow automation or a well-trained assistant can take off your team's plate.",
  },

  process: {
    kicker: 'Process',
    title: 'How a project usually goes',
  },

  why: {
    kicker: 'Why Pixexl',
    title: 'Built around how your team works',
    body: [
      "Every engagement begins with a clear understanding of how your business operates, rather than with the technology. In addition, you work directly with the engineers who design and build your tools, and we will always advise you when a simpler solution or an existing product would serve you better.",
      "All systems are deployed on your own accounts, so you retain full ownership of your data, code and infrastructure. As a result, your AI tools, automations and website are planned together and work as one from launch.",
    ],
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
