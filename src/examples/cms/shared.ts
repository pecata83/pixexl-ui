/** Strings shared across multiple pages / components. */
export const shared = {
  /** Default closing banner headline — override per-page via the `title` prop. */
  closingBannerTitle: 'Where could your team use a hand?',
  closingBannerDescription: "Book a free 30-minute call. Tell us how your business runs and where your team loses time, and then we'll suggest where AI could help and what it would take. There's no obligation.",

  cta: {
    bookACall: 'Book a call',
  },

  nav: {
    ctaLabel: 'Book a call',
    ctaHref: '/contact' as const,
  },

  /** Site-wide SEO description (used in root layout). Keep under 155 characters. */
  siteDescription:
    "Pixexl is a London AI studio. We audit how your business runs, then build AI tools that make your team's work easier.",

  /** One line under the logo in the footer. */
  footerBlurb: "An AI development studio in London. We build tools that make your team's work easier.",

  /** Short studio intro reused across about & layout descriptions. */
  studioIntro:
    'Pixexl is an AI development studio based in London, UK. We help businesses find where AI adds value, build the tools, and get their teams confident using them.',
};
