export type LegalDoc = {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  updated: string;
  sections: { title: string; paras: string[] }[];
};

// TODO: have a solicitor review both documents and add your registered company name, number and address.
export const privacyPage: LegalDoc = {
  meta: { title: "Privacy Policy", description: "How Pixexl collects, uses and looks after your personal data when you use this website or get in touch with us." },
  title: "Privacy Policy",
  intro: "How Pixexl collects, uses and looks after your personal data when you use this website or get in touch with us.",
  updated: '26 September 2026',
  sections: [
    { title: "Who we are", paras: [
      "Pixexl is an AI development studio based in London, UK. We are the data controller for personal data collected through this website. You can contact us about anything in this policy at hello@pixexl.com.",
    ] },
    { title: "What we collect", paras: [
      "Details you give us when you book a call or email us: your name, email address, company, and anything you include in your message.",
      "Basic technical data when you visit the site, such as your browser, the pages you view and your approximate location. This is collected through cookies and analytics tools.",
    ] },
    { title: "How we use it", paras: [
      "To reply to your enquiry and arrange calls, to deliver work we have agreed with you, to improve the website, and to meet our legal and accounting obligations.",
      "We do not sell your data, and we do not use it to make automated decisions that affect you.",
    ] },
    { title: "Our legal basis", paras: [
      "Under UK GDPR we rely on legitimate interests to reply to enquiries and run the website, on contract to deliver services, on consent for non-essential cookies and marketing emails, and on legal obligation for record keeping.",
    ] },
    { title: "Who we share it with", paras: [
      "Trusted providers that help us run the business, such as website hosting, email and calendar tools. They only process your data on our instructions.",
      "Some of these providers may store data outside the UK. Where they do, we use appropriate safeguards such as the UK International Data Transfer Agreement.",
    ] },
    { title: "Client project data", paras: [
      "When we build tools for a client, we process their data on their behalf under a separate data processing agreement. That agreement, not this policy, covers how that data is handled.",
    ] },
    { title: "How long we keep it", paras: [
      "Enquiries are kept for up to two years after we last hear from you. Client and billing records are kept for six years to meet UK accounting rules.",
    ] },
    { title: "Your rights", paras: [
      "You can ask to access, correct or delete your data, to restrict or object to how we use it, to receive a copy in a portable format, and to withdraw consent at any time. Email hello@pixexl.com and we will reply within one month.",
      "If you're unhappy with how we have handled your data, you can complain to the Information Commissioner's Office at ico.org.uk.",
    ] },
    { title: "Cookies", paras: [
      "We use essential cookies to make the site work. Analytics cookies are only set if you agree to them. You can change your choice at any time or clear cookies in your browser settings.",
    ] },
    { title: "Changes to this policy", paras: [
      "We may update this policy from time to time. The date at the top shows when it last changed.",
    ] },
  ],
};

export const termsPage: LegalDoc = {
  meta: { title: "Terms of Service", description: "The terms that apply when you use pixexl.com. Project work is covered by a separate written agreement." },
  title: "Terms of Service",
  intro: "The terms that apply when you use pixexl.com. Project work is covered by a separate written agreement.",
  updated: '26 September 2026',
  sections: [
    { title: "About these terms", paras: [
      "This website is run by Pixexl, an AI development studio based in London, UK. By using the site you accept these terms. If you do not agree, please do not use it.",
    ] },
    { title: "Using the site", paras: [
      "You may use the site for lawful purposes only. Please do not try to disrupt it, gain unauthorised access to it, or copy large parts of it by automated means.",
    ] },
    { title: "Information on the site", paras: [
      "Content on this site is general information, not professional advice. We work to keep it accurate and up to date but cannot guarantee that it always is.",
    ] },
    { title: "Intellectual property", paras: [
      "The content, design and code of this site belong to Pixexl or our licensors. Client names, logos and screenshots belong to their owners and are shown with permission.",
    ] },
    { title: "Our services", paras: [
      "Audits, builds and ongoing work are provided under a separate written agreement that sets out scope, fees and responsibilities. If that agreement conflicts with these terms, the agreement applies.",
    ] },
    { title: "Links to other sites", paras: [
      "We link to other websites, including client sites and review platforms. We are not responsible for their content or how they handle your data.",
    ] },
    { title: "Liability", paras: [
      "As far as the law allows, we are not liable for any loss arising from your use of this site. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot be limited by law.",
    ] },
    { title: "Governing law", paras: [
      "These terms are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction over any dispute.",
    ] },
    { title: "Changes and contact", paras: [
      "We may update these terms from time to time. The date at the top shows when they last changed. Questions can go to hello@pixexl.com.",
    ] },
  ],
};
