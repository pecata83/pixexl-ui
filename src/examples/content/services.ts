export type Service = { title: string; tag: string; copy: string };
export type ServiceGroup = { id: string; label: string; note: string; accent: 'primary' | 'ink'; items: Service[] };

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'audit',
    label: 'Audit and optimise',
    note: 'Start here',
    accent: 'primary',
    items: [
      { title: 'AI business audit', tag: 'Audit', copy: "We spend time with you and your team, look at how the work actually gets done, and come back with a short list: where AI would help your team most, roughly what it would cost, and what's not worth doing." },
      { title: 'Ongoing optimisation', tag: 'Optimise', copy: "Once things are running we keep tuning them. Better answers from the chatbot, new automations as you spot them, and a monthly check on what's actually saving time." },
      { title: 'Strategy and team training', tag: 'Training', copy: "Hands-on sessions that show your team how to use AI tools in their own jobs, with their own examples, so it sticks after we've gone." },
    ],
  },
  {
    id: 'tools',
    label: 'AI tools we build',
    note: 'Support for your team',
    accent: 'primary',
    items: [
      { title: 'Custom chatbots', tag: 'Chatbots', copy: 'A chatbot trained on your own content, prices and policies, on your website, WhatsApp or Messenger. It deals with the everyday questions so your team can spend their time on the conversations that need a person.' },
      { title: 'Booking and enquiry assistants', tag: 'Chatbots', copy: 'Something that picks up enquiries at 11pm on a Sunday, checks availability, takes the booking or qualifies the lead, then passes it to your team with all the details ready.' },
      { title: 'Workflow automation', tag: 'Automation', copy: 'Help with the copy-and-paste parts of the job: invoices, order updates, follow-up emails, moving data between tools. Your team stays in charge, and anything unusual comes to them to decide.' },
      { title: 'Knowledge assistants', tag: 'Knowledge', copy: 'Your team asks a question and gets an answer pulled from your own documents, manuals and past emails, with a link to where it came from.' },
      { title: 'Connecting your tools', tag: 'Integrations', copy: 'We plug AI into what you already use, like HubSpot, Shopify, Google Workspace, Microsoft 365, Slack or your booking platform. Your team keeps working the way they already do.' },
    ],
  },
  {
    id: 'web',
    label: 'Websites and AI search',
    note: 'Built for how people search now',
    accent: 'ink',
    items: [
      { title: 'AI-friendly websites', tag: 'Web', copy: 'New sites in React and Next.js, fast and cleanly structured, so AI tools can read them and describe you accurately. Built so adding a chatbot or booking assistant later is easy.' },
      { title: 'AEO and GEO', tag: 'AI search', copy: 'Getting your business mentioned when people ask ChatGPT or Google for a recommendation. We tidy up your own pages and the reviews and listings elsewhere that AI models learn from.' },
    ],
  },
];

/** Flat list with running numbers (01, 02, ...) across all groups. */
export const numberedServiceGroups = (() => {
  let n = 0;
  return serviceGroups.map((g) => ({
    ...g,
    items: g.items.map((s) => ({ ...s, num: String(++n).padStart(2, '0') })),
  }));
})();

export const opportunities = [
  { problem: 'You answer the same customer questions all day', fix: 'Custom chatbot' },
  { problem: 'Enquiries come in overnight and wait until morning', fix: 'Booking and enquiry assistant' },
  { problem: 'Someone spends hours copying data between systems', fix: 'Workflow automation' },
  { problem: "The know-how lives in PDFs and in one person's head", fix: 'Knowledge assistant' },
  { problem: 'Weekly reports take someone most of a day', fix: 'Automated reporting' },
  { problem: "Everyone's talking about AI but nobody knows where to start", fix: 'Strategy and team training' },
];

export const processSteps = [
  { when: 'Weeks 1–2', title: 'Audit', copy: 'We talk to you and your team, look at your tools and processes, and listen to what slows people down.' },
  { when: 'Week 3', title: 'Plan', copy: "You get a prioritised list of what to build, ordered by impact, with rough costs against each." },
  { when: 'Weeks 4–8', title: 'Build', copy: 'We build and test the tools with your team, and connect them to the software you already use.' },
  { when: 'Monthly', title: 'Improve', copy: "We check what's working, tune it, and pick the next thing to tackle." },
];
