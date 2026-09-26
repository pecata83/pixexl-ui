import {
  Accordion,
  ArrowRightIcon,
  Button,
  Card,
  ReviewCard,
  SectionHeader,
} from '../../index';
import { ClosingBanner } from '../site/ClosingBanner';
import { ServiceGroupSummary } from '../site/ServiceGroupList';
import { faqs } from '../content/faqs';
import { reviews } from '../content/reviews';
import { opportunities, processSteps } from '../content/services';
import { site } from '../content/site';
import { homePage } from '../cms';
export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="container-page pb-[clamp(56px,8vw,96px)] pt-[clamp(64px,10vw,128px)]">
        <h1 className="m-0 max-w-[14ch] text-[clamp(44px,7vw,96px)] leading-[1.02] tracking-[-0.03em]">
          <span className="block">{homePage.hero.line1}</span>
          <span className="block text-secondary">{homePage.hero.line2}</span>
        </h1>
        <p className="mb-0 mt-9 max-w-[56ch] text-[19px] leading-relaxed">
          {homePage.hero.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={homePage.hero.ctaHref}>
              {homePage.hero.ctaLabel} <ArrowRightIcon />
            </a>
          </Button>
        </div>
      </section>

      {/* Services summary */}
      <section className="container-page pb-[clamp(40px,5vw,64px)] pt-[clamp(64px,8vw,104px)]">
        <div className="mb-10 grid gap-x-18 gap-y-6 md:grid-cols-2">
          <SectionHeader kicker={homePage.services.kicker} title={homePage.services.title} />
          <p className="m-0 max-w-[52ch] self-end text-[17px] leading-relaxed">
            {homePage.services.body}
          </p>
        </div>
        <ServiceGroupSummary />
      </section>

      {/* Where AI helps */}
      <section className="container-page pt-[clamp(40px,5vw,64px)]">
        <Card tone="dark" radius="panel" padding="lg" className="flex flex-col gap-8">
          <SectionHeader
            tone="dark"
            kicker={homePage.whereAiHelps.kicker}
            title={homePage.whereAiHelps.title}
            description={homePage.whereAiHelps.description}
          />
          <ul className="m-0 list-none border-t border-paper/20 p-0">
            {opportunities.map((o) => (
              <li key={o.problem} className="grid items-baseline gap-x-8 gap-y-2 border-b border-paper/20 py-5 sm:grid-cols-2">
                <span className="text-[17px] leading-normal">{o.problem}</span>
                <span className="flex items-baseline gap-2.5 text-[17px] font-semibold">
                  <ArrowRightIcon className="translate-y-0.5 text-secondary-300" />
                  {o.fix}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Process */}
      <section className="container-page pb-[clamp(64px,8vw,104px)] pt-[clamp(40px,5vw,64px)]">
        <SectionHeader kicker={homePage.process.kicker} title={homePage.process.title} className="mb-10" />
        <ol className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <li key={s.title}>
              <Card radius="tile" padding="none" className="flex h-full flex-col gap-3 p-6">
                <span className="flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.04em] text-neutral-700">
                  <span aria-hidden className="block size-2.5 rounded-full bg-primary" />
                  {s.when}
                </span>
                <h3 className="m-0 text-[22px]">{s.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-neutral-800">{s.copy}</p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      {/* Reviews */}
      <section className="container-page flex flex-col gap-8 pt-[clamp(40px,5vw,64px)]">
        <SectionHeader
          kicker={homePage.reviews.kicker}
          title={homePage.reviews.title}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <ReviewCard key={i} quote={r.quote} name={r.name} company={r.company} rating={r.rating} />
          ))}
        </div>
        <p className="m-0 text-sm text-neutral-500">{site.trustpilotUrl}</p>
      </section>

      {/* FAQ */}
      <section className="container-page grid items-start gap-x-18 gap-y-8 py-[clamp(64px,8vw,104px)] lg:grid-cols-3">
        <SectionHeader kicker={homePage.faq.kicker} title={homePage.faq.title} />
        <Accordion items={faqs} className="lg:col-span-2" />
      </section>

      <ClosingBanner />
    </main>
  );
}
