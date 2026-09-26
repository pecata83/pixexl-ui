import * as React from 'react';
import { Button, Logo, Nav } from '../../index';
import { navLinks, site } from '../content/site';
import { SiteFooter } from './SiteFooter';

/** Nav + footer around a page, the same as src/app/layout.tsx in pecata83/pixexl. */
export function SiteShell({ current, children }: { current?: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink antialiased">
      <Nav
        brand={<Logo name={site.name} />}
        links={navLinks}
        currentHref={current}
        cta={
          <Button asChild size="sm">
            <a href="/contact">Book a call</a>
          </Button>
        }
        mobileFooter={
          <>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.location}</span>
          </>
        }
      />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
