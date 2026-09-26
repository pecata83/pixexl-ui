/** Strings shared across multiple pages / components. */
export const shared = {
  /** Default closing banner headline — override per-page via the `title` prop. */
  closingBannerTitle: 'Where could your team use a hand?',

  cta: {
    bookACall: 'Book a call',
  },

  nav: {
    ctaLabel: 'Book a call',
    ctaHref: '/contact' as const,
  },

  /** Site-wide SEO description (used in root layout). */
  siteDescription:
    "Pixexl is an AI development studio based in London, UK. We audit how your business runs, build AI tools that make your team's work easier, and design websites ready for AI search.",

  /** Short studio intro reused across about & layout descriptions. */
  studioIntro:
    'Pixexl is an AI development studio based in London, UK. We help businesses find where AI adds value, build the tools, and get their teams confident using them.',
};
