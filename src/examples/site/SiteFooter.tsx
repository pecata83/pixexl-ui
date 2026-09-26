import { FacebookIcon, LinkedInIcon } from '../../index';
import { footerLinks, legalLinks, site, socialLinks } from '../content/site';
import { shared } from '../cms';

const socialIcons = { facebook: FacebookIcon, linkedin: LinkedInIcon };
const heading = 'font-mono text-xs uppercase tracking-[0.04em] text-neutral-700';
const link = 'text-[15px] text-ink no-underline hover:text-primary-700';

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-x-8 gap-y-10 pt-[clamp(48px,6vw,72px)]">
        <div className="flex min-w-0 max-w-[36ch] flex-col items-start gap-4">
          <a href="/" className="text-[22px] font-semibold tracking-[-0.02em] text-ink no-underline hover:text-ink">
            {site.name}
          </a>
          <p className="m-0 text-[15px] leading-relaxed text-neutral-800">{shared.footerBlurb}</p>
          <a href={`mailto:${site.email}`} className="text-[15px] font-semibold text-primary-700 hover:text-primary">
            {site.email}
          </a>
        </div>
        <nav aria-label="Footer" className="flex flex-col items-start gap-3">
          <span className={heading}>Pages</span>
          {footerLinks.map((l) => (
            <a key={l.href} href={l.href} className={link}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-start gap-3">
          <span className={heading}>Follow</span>
          {socialLinks.map((s) => {
            const Icon = socialIcons[s.id];
            return (
              <a key={s.id} href={s.href} target="_blank" rel="noopener" className={`flex items-center gap-2 ${link}`}>
                <Icon />
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
      <div className="container-page">
        <div className="mt-[clamp(40px,5vw,56px)] flex flex-wrap gap-x-6 gap-y-3 border-t border-line pb-7 pt-5 text-[13px] text-neutral-700">
          <span className="mr-auto">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-neutral-700 hover:text-primary-700">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
