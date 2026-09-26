import { Card, SectionHeader, Tag } from '../../index';
import { ClosingBanner } from '../site/ClosingBanner';
import { principles, stack } from '../content/about';
import { aboutPage } from '../cms';

export function AboutPage() {
  return (
    <main>
      <section className="container-page grid items-end gap-[clamp(32px,5vw,72px)] pb-[clamp(40px,5vw,64px)] pt-[clamp(56px,8vw,104px)] md:grid-cols-2">
        <SectionHeader
          size="page"
          as="h1"
          kicker={aboutPage.hero.kicker}
          title={aboutPage.hero.title}
          description={aboutPage.hero.description}
        />
        <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line grayscale contrast-[1.08]">
          <img src="https://main.d3najxz51qeq6q.amplifyapp.com/_next/image?url=%2Fabout.jpg&w=750&q=75" alt={aboutPage.hero.imageAlt} className="block size-full object-cover" />
        </div>
      </section>

      <section className="container-page py-[clamp(40px,5vw,64px)]">
        <SectionHeader kicker={aboutPage.principles.kicker} title={aboutPage.principles.title} className="mb-8" />
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((p, i) => (
            <Card key={p.title} radius="tile" className="flex flex-col gap-3">
              <span className="font-mono text-[13px] text-secondary-600">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="m-0 text-2xl">{p.title}</h3>
              <p className="m-0 max-w-[52ch] text-base leading-relaxed text-neutral-800">{p.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page pb-[clamp(56px,7vw,88px)] pt-[clamp(24px,4vw,48px)]">
        <Card tone="dark" radius="panel" padding="lg" className="grid items-start gap-x-18 gap-y-8 md:grid-cols-2">
          <SectionHeader
            tone="dark"
            kicker={aboutPage.stack.kicker}
            title={aboutPage.stack.title}
            description={aboutPage.stack.description}
          />
          <div className="flex flex-wrap content-start gap-2.5">
            {stack.map((t) => (
              <Tag key={t} tone="onDark" className="px-3.5 py-2 text-sm">
                {t}
              </Tag>
            ))}
          </div>
        </Card>
      </section>

      <ClosingBanner />
    </main>
  );
}
