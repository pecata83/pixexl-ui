import { Card, Tag } from '../../index';
import { numberedServiceGroups } from '../content/services';

function Dot({ accent }: { accent: 'primary' | 'ink' }) {
  return <span aria-hidden className={`block size-2.5 rounded-full ${accent === 'primary' ? 'bg-primary' : 'bg-ink'}`} />;
}

/** Full service list with descriptions (Services page). */
export function ServiceGroupList() {
  return (
    <div className="flex flex-col gap-4">
      {numberedServiceGroups.map((g) => (
        <Card key={g.id} id={g.id} padding="none" className="scroll-mt-28 px-[clamp(20px,3vw,32px)] py-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-4 pt-6">
            <h2 className="m-0 flex items-center gap-2.5 font-mono text-[15px] font-medium uppercase tracking-[0.04em]">
              <Dot accent={g.accent} />
              {g.label}
            </h2>
            <span className="text-[15px] text-neutral-700">{g.note}</span>
          </div>
          {g.items.map((s) => (
            <div key={s.title} className="grid grid-cols-[64px_minmax(0,1fr)] gap-x-6 gap-y-2 border-t border-line py-7">
              <span className="pt-1.5 font-mono text-sm text-neutral-600">{s.num}</span>
              <div className="grid gap-x-12 gap-y-3 md:grid-cols-2">
                <div className="flex flex-col items-start gap-2.5">
                  <h3 className="m-0 text-2xl leading-tight">{s.title}</h3>
                  <Tag>{s.tag}</Tag>
                </div>
                <p className="m-0 max-w-[54ch] text-base leading-relaxed text-neutral-800">{s.copy}</p>
              </div>
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
}

/** Three summary cards linking to /services (Home page). */
export function ServiceGroupSummary() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {numberedServiceGroups.map((g) => (
        <Card key={g.id} className="flex flex-col gap-4.5">
          <div className="flex flex-col gap-2">
            <h3 className="m-0 flex items-center gap-2.5 font-mono text-[15px] font-medium uppercase tracking-[0.04em]">
              <Dot accent={g.accent} />
              {g.label}
            </h3>
            <span className="text-[15px] text-neutral-700">{g.note}</span>
          </div>
          <ul className="m-0 flex flex-1 list-none flex-col border-t border-line p-0">
            {g.items.map((s) => (
              <li key={s.title} className="border-b border-line py-3 text-[17px] font-medium">
                {s.title}
              </li>
            ))}
          </ul>
          <a href={`/services#${g.id}`} className="self-start text-sm font-semibold text-secondary-700">
            Learn more →
          </a>
        </Card>
      ))}
    </div>
  );
}
