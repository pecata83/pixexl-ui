import { CaseStudyCard, SectionHeader } from '../../index';
import { ClosingBanner } from '../site/ClosingBanner';
import { caseStudies } from '../content/caseStudies';
import { caseStudiesPage } from '../cms';

export function CaseStudiesPage() {
  return (
    <main>
      <section className="container-page pb-[clamp(64px,8vw,104px)] pt-[clamp(56px,8vw,104px)]">
        <SectionHeader
          size="page"
          as="h1"
          kicker={caseStudiesPage.hero.kicker}
          title={caseStudiesPage.hero.title}
          description={caseStudiesPage.hero.description}
          className="mb-14"
        />
        <div className="flex flex-col gap-5">
          {caseStudies.map((c, i) => (
            <CaseStudyCard
              key={c.slug}
              id={c.slug}
              className="scroll-mt-28"
              name={c.name}
              sector={c.sector}
              index={String(i + 1).padStart(2, '0')}
              summary={c.summary}
              built={c.built}
              tags={c.tags}
              href={c.url}
              linkLabel={`Visit ${c.domain}`}
            />
          ))}
        </div>
      </section>
      <ClosingBanner />
    </main>
  );
}
