# @pixexl/ui

React components and a Tailwind CSS v4 theme for Pixexl projects. Built for Next.js (App Router), written in TypeScript, documented in Storybook.

- Rounded, calm look: paper ground, thin 1px borders, pill buttons, 24 to 32px cards
- Two colours with clear jobs: **red** (`primary`) for actions, **indigo** (`secondary`) for AI moments
- Geist and Geist Mono
- Variants with [cva](https://cva.style) and conflict-free class merging with tailwind-merge
- Interactive components are marked `'use client'`; everything else is server-safe

## Install

```bash
npm i @pixexl/ui geist
```

Peer dependencies: `react >= 18.2`, `react-dom`, `tailwindcss ^4`.

## Set up in Next.js (App Router)

**1. Import the theme** in your global stylesheet, after Tailwind:

```css
/* app/globals.css */
@import "tailwindcss";
@import "@pixexl/ui/theme.css";
```

The theme adds the colour, font, radius and shadow tokens, a few base styles, and an `@source` rule so Tailwind picks up the classes used inside the package. No extra config needed.

**2. Load Geist** in your root layout:

```tsx
// app/layout.tsx
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={GeistSans.variable + ' ' + GeistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
```

**3. Use the components:**

```tsx
// app/page.tsx (a server component)
import Link from 'next/link';
import { Button, SectionHeader, Banner, ArrowRightIcon } from '@pixexl/ui';

export default function Page() {
  return (
    <main className="container-page flex flex-col gap-16 py-16">
      <SectionHeader
        size="hero"
        as="h1"
        title="Better tools for your team."
        description="We look at how your business runs and build AI tools that make the day easier."
      />
      <Button asChild size="lg">
        <Link href="/contact">Book a call <ArrowRightIcon /></Link>
      </Button>
      <Banner
        title="Where could your team use a hand?"
        action={<Button asChild variant="inverse" size="lg"><Link href="/contact">Book a call</Link></Button>}
      />
    </main>
  );
}
```

### Navigation with next/link

`Nav` is a client component. Wrap it once in your layout and pass `usePathname()` so the current page is highlighted:

```tsx
// app/site-nav.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Nav, Logo, Button } from '@pixexl/ui';

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function SiteNav() {
  return (
    <Nav
      brand={<Logo />}
      links={links}
      currentHref={usePathname()}
      linkComponent={Link}
      cta={<Button asChild size="sm"><Link href="/contact">Book a call</Link></Button>}
      mobileFooter={<a href="mailto:hello@pixexl.com">hello@pixexl.com</a>}
    />
  );
}
```

### Styling links as buttons in server components

`buttonVariants` lives in a server-safe module, so you can use it anywhere:

```tsx
import { buttonVariants } from '@pixexl/ui';
<Link href="/services" className={buttonVariants({ variant: 'secondary' })}>Our services</Link>
```

## Components

| Component | Client? | Notes |
| --- | --- | --- |
| `Button`, `buttonVariants` | yes (`buttonVariants` no) | primary, secondary, ghost, inverse; sm, md, lg, icon; `asChild` |
| `Tag` | no | secondary, primary, neutral, outline, onDark |
| `Card`, `CardTitle`, `CardBody` | no | tone surface, outline, dark, primary; radius tile, card, panel |
| `SectionHeader`, `Kicker` | no | size hero, page, section; optional action slot |
| `Nav`, `Logo` | yes / no | sticky pill bar, centred links, mobile drop-down |
| `Accordion` | yes | FAQ list, one item open at a time |
| `ReviewCard`, `TrustStars`, `TrustpilotBadge` | no | Trustpilot-style stars |
| `CaseStudyCard` | no | feature and compact layouts, grayscale media |
| `Field`, `Label`, `Input`, `Textarea` | no | |
| `OptionGroup` | yes | pill radio buttons, works in forms |
| `TimeSlotPicker` | yes | optional hidden input for forms |
| `Banner` | no | closing call to action |
| `ChatWindow`, `ChatBubble` | no | chatbot demos |
| Icons | no | small set of Lucide icons used by the components |

## Tokens

| Tailwind class | Token |
| --- | --- |
| `bg-paper`, `bg-surface`, `text-ink`, `border-line` | ground, card fill, text, borders |
| `bg-primary`, `bg-primary-100` … `-900` | Pixexl red |
| `bg-secondary`, `bg-secondary-100` … `-900` | Indigo |
| `bg-neutral-100` … `-900` | Neutrals |
| `rounded-tile` 24px, `rounded-card` 28px, `rounded-panel` 32px, `rounded-bubble` 18px | Corners |
| `font-sans`, `font-mono` | Geist, Geist Mono |
| `container-page` | 1200px max width with page gutters |

The same values are in `@pixexl/ui/tokens.json` (W3C design tokens format). You can import that file into Figma with a plugin like Tokens Studio.

## Develop

```bash
npm install
npm run dev          # Storybook on http://localhost:6006
npm test             # Vitest
npm run typecheck
npm run build        # outputs dist/
```

To try the package in an app before publishing:

```bash
npm run build && npm pack      # creates pixexl-ui-0.1.0.tgz
# in your app:
npm i ../path/to/pixexl-ui-0.1.0.tgz
```

## Publish to npm

One-time setup:

1. Create an npm account and an organisation called **pixexl** at npmjs.com, so the `@pixexl` scope is yours.
2. Create an npm **automation** access token and add it to your GitHub repo as a secret named `NPM_TOKEN` (Settings → Secrets and variables → Actions).
3. Push this folder to a GitHub repo. Set `repository` in `package.json` to that repo's URL, because npm provenance checks it.

Each release:

```bash
npm version patch     # or minor / major
git push --follow-tags
```

The **Release** workflow runs the type check, tests and build, then publishes with provenance. The **CI** workflow runs the same checks and a Storybook build on every pull request.

## Guidelines

- Use red for the main action on a page and for selected states. Use indigo for AI-related labels, tags and panels. Leave everything else ink on paper.
- For small text in a colour, use the 700 step (`text-primary-700`, `text-secondary-700`).
- Keep button labels flush left; a trailing arrow sits at the right edge.
- Case study and team photos print in black and white (`grayscale` is on by default in `CaseStudyCard`).
- Write plainly. Describe AI as something that helps a team, never as a replacement for people.
