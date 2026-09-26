import { Card, SectionHeader } from '../../index';
import { ContactForm } from '../site/ContactForm';
import { site } from '../content/site';
import { contactPage } from '../cms';

export function ContactPage() {
  const rows = [
    { label: contactPage.infoCard.emailLabel, value: <a href={`mailto:${site.email}`}>{site.email}</a> },
    { label: contactPage.infoCard.locationLabel, value: site.location },
    { label: contactPage.infoCard.replyTimeLabel, value: site.replyTime },
  ];
  return (
    <main className="container-page grid items-start gap-x-[clamp(40px,6vw,96px)] gap-y-12 pb-[clamp(64px,8vw,104px)] pt-[clamp(56px,8vw,104px)] lg:grid-cols-2">
      <div>
        <SectionHeader
          size="page"
          as="h1"
          title={contactPage.hero.title}
          description={contactPage.hero.description}
        />
        <Card radius="tile" padding="none" className="mt-10 px-6 py-1">
          <dl className="m-0">
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-[120px_1fr] gap-4 py-4 text-[15px] ${i < rows.length - 1 ? 'border-b border-line' : ''}`}>
                <dt className="text-neutral-700">{r.label}</dt>
                <dd className="m-0">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
      <ContactForm />
    </main>
  );
}
