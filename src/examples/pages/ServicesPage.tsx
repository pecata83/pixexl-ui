import { SectionHeader } from '../../index';
import { ClosingBanner } from '../site/ClosingBanner';
import { ServiceGroupList } from '../site/ServiceGroupList';
import { serviceGroups } from '../content/services';
import { servicesPage } from '../cms';

export function ServicesPage() {
  return (
    <main>
      <section className="container-page pb-[clamp(48px,6vw,80px)] pt-[clamp(56px,8vw,104px)]">
        <SectionHeader
          size="page"
          as="h1"
          kicker={servicesPage.hero.kicker}
          title={servicesPage.hero.title}
          description={servicesPage.hero.description}
        />
        <nav aria-label={servicesPage.nav.ariaLabel} className="mb-12 mt-8 flex flex-wrap gap-2">
          {serviceGroups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-ink no-underline hover:border-secondary hover:text-ink"
            >
              <span aria-hidden className={`block size-2 rounded-full ${g.accent === 'primary' ? 'bg-primary' : 'bg-ink'}`} />
              {g.label}
            </a>
          ))}
        </nav>
        <ServiceGroupList />
      </section>
      <ClosingBanner />
    </main>
  );
}
