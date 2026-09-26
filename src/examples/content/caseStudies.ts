export type CaseStudy = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  sector: string;
  summary: string;
  built: string[];
  tags: string[];
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'crete-boat-trips',
    name: 'Crete Boat Trips',
    domain: 'creteboattrips.com',
    url: 'https://creteboattrips.com/',
    sector: 'Travel · Crete',
    summary: 'A booking platform for private boat trips, sunset cruises and boat rentals, departing from harbours across Chania, Rethymno, Heraklion and Agios Nikolaos.',
    built: ['Trip and boat-rental listings with prices, durations and group sizes', 'Guides to beaches, sights and departure ports', 'Guest reviews, favourites, cart and WhatsApp contact'],
    tags: ['Next.js', 'Booking platform', 'Content & SEO'],
    image: '/images/CBT preview.png',
  },
  {
    slug: 'skywine',
    name: 'SkyWine',
    domain: 'skywine.vin',
    url: 'https://skywine.vin/',
    sector: 'Hospitality · Wine',
    summary: 'A site for private, guided wine tastings across Crete, Cyprus, the Peloponnese and cities like Athens and Brussels.',
    built: ['Tasting programmes and bookable events', 'English and French versions of the whole site', 'Blog, reviews and newsletter sign-up'],
    tags: ['Next.js', 'Events', 'Multilingual'],
    image: '/images/SkyWine preview.png',
  },
  {
    slug: 'exclusivexplore',
    name: 'ExclusivExplore',
    domain: 'exclusivexplore.gr',
    url: 'https://exclusivexplore.gr/',
    sector: 'Travel · Almyrida, Crete',
    summary: 'Private catamaran cruises in Souda Bay, from morning breakfast trips to full days at sea and sunset aperitifs.',
    built: ['Trip pages with times, prices and group sizes', 'English, French and German versions', 'Guest reviews, gallery and WhatsApp contact'],
    tags: ['Next.js', 'Bookings', 'Multilingual'],
  },
  {
    slug: 'nova',
    name: 'Nova',
    domain: 'withnova.co.uk',
    url: 'https://withnova.co.uk/',
    sector: 'UK',
    summary: 'Case study details to follow.', // TODO
    built: ['Website design and build'],
    tags: ['Next.js'],
  },
];
