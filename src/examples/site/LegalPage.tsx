import { SectionHeader } from '../../index';
import type { LegalDoc } from '../cms';
import { site } from '../content/site';

/** Privacy Policy / Terms of Service layout: numbered sections, number stacks above on small screens. */
export function LegalPage({ doc, other }: { doc: LegalDoc; other: { label: string; href: string } }) {
  return (
    <main>
      <section className="container-page pb-[clamp(64px,8vw,104px)] pt-[clamp(56px,8vw,104px)]">
        <SectionHeader size="page" as="h1" kicker="Legal" title={doc.title} description={doc.intro} />
        <p className="mb-14 mt-3 text-sm text-neutral-700">Last updated {doc.updated}</p>
        <div className="flex max-w-[820px] flex-col">
          {doc.sections.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-x-6 gap-y-2 border-t border-line py-7 sm:flex-row">
              <span className="font-mono text-sm font-semibold text-neutral-600 sm:w-16 sm:shrink-0 sm:pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <h2 className="m-0 text-[22px] leading-tight">{s.title}</h2>
                {s.paras.map((p) => (
                  <p key={p} className="m-0 max-w-[64ch] text-base leading-relaxed text-neutral-800">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-7 text-[15px]">
            <span>
              Questions? Email{' '}
              <a href={`mailto:${site.email}`} className="font-semibold">
                {site.email}
              </a>
            </span>
            <a href={other.href} className="ml-auto">
              {other.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
