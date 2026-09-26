export const site = {
  name: 'Pixexl',
  email: 'hello@pixexl.com',
  location: 'London, UK',
  replyTime: 'Within one working day',
  trustpilotUrl: 'https://www.trustpilot.com/review/pixexl.com',
  trustScore: 'Excellent', // TODO: replace with your real TrustScore
};

export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/pixexl' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/pixexl' },
] as const;

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];
