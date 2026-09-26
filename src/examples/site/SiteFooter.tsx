import { navLinks, site } from '../content/site';

export function SiteFooter() {
  return (
    <footer className="container-page">
      <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line py-7 text-[13px] text-neutral-700">
        <span className="mr-auto">© {new Date().getFullYear()} {site.name}</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
