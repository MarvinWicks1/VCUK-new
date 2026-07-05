# VCUK Web Services Tech Stack

This file defines the recommended technical stack for building the VCUK Web Services website. The goal is a fast, premium, maintainable marketing site, not an overbuilt web app.

## Recommended Stack

Use this stack unless Ian explicitly approves a different direction.

| Layer | Choice | Reason |
|---|---|---|
| Framework | Astro | Excellent for fast static marketing sites, content pages, SEO, and minimal JavaScript |
| Language | TypeScript | Safer components, clearer data structures, better maintainability |
| Styling | Plain CSS with design tokens, or scoped Astro CSS | Keeps the site custom, lightweight, and aligned with the brand system |
| Content | Markdown or MDX | Ideal for guides, case studies, and future content growth |
| JavaScript | Minimal vanilla JS or Astro islands only where needed | Keeps performance high and avoids unnecessary app complexity |
| Forms | Static form provider or serverless endpoint | More reliable than `mailto:` and suitable for a static-first site |
| Hosting | Netlify or Vercel | Simple deployment, previews, forms/serverless options, fast CDN |
| Analytics | Plausible, Fathom, Umami, or GA4 | Track conversions without adding heavy scripts where possible |

## Stack Decision

Primary recommendation:

> Build the site with Astro, TypeScript, and lightweight CSS.

Do not use a heavy React single-page app for this project unless there is a specific feature that genuinely requires it.

The site is mostly:

- Marketing pages.
- Service pages.
- Pricing content.
- Work/case-study pages.
- Guides.
- Contact and conversion flows.
- A small interactive website checker.

Astro is a strong fit because it can deliver all of this as fast static HTML with small interactive components only where needed.

## Approved Technology Choices

### Framework

Use:

- Astro.

Allowed only if there is a clear reason:

- Next.js.
- Eleventy.
- Plain static HTML/CSS/JS.

Avoid:

- WordPress unless Ian explicitly asks for WordPress.
- Wix, Squarespace, Webflow, or no-code builders for this repo build.
- Full React/Vite app for a mostly static marketing site.
- Heavy page-builder-style systems.

## Styling Rules

Preferred styling approach:

- CSS custom properties for brand tokens.
- Global layout utilities.
- Component-level CSS where useful.
- No large utility framework unless explicitly approved.

Do not default to Tailwind unless Ian approves it.

Reason:

- VCUK needs to feel custom and brand-led.
- The design system is simple enough for clean CSS.
- Avoid utility-class noise if it does not add real value.

Required design tokens:

```css
:root {
  --color-navy: #071B3A;
  --color-blue: #006BCB;
  --color-blue-dark: #004F9F;
  --color-white: #FFFFFF;
  --color-frost: #F5F8FC;
  --color-soft-blue: #E7EEF8;
  --color-text: #101827;
  --color-muted: #526071;
  --color-border: #D8E2EF;
}
```

The build may add more tokens for spacing, shadows, radius, and typography.

## Content Architecture

Use content collections or a simple content structure for:

- Guides.
- Work examples.
- Case studies.
- Service pages if useful.

Recommended folders:

```text
src/
  content/
    guides/
    work/
  components/
  layouts/
  pages/
  styles/
public/
  images/
  logos/
```

Guides should be easy to add without editing multiple layout files.

## Required Pages

Build these as real routes:

```text
/
/services/
/pricing/
/work/
/guides/
/about/
/contact/
```

Future-ready routes:

```text
/guides/[slug]/
/web-design-cheshire/
/web-design-winsford/
/one-page-websites/
/website-redesigns/
/website-care-plans/
```

Do not build future pages as empty placeholders. Only create pages that have useful content.

## Interactivity

The site should use minimal JavaScript.

Required interactive elements:

- Mobile navigation.
- Website clarity checker.
- Contact form validation or submission states.

Optional interactive elements:

- Subtle reveal animations.
- Pricing/package toggles if useful.
- Guide filtering if enough guides exist.

Rules:

- No heavy animation libraries.
- No scroll hijacking.
- No interaction that harms accessibility.
- No JavaScript required for core content to be visible.

## Website Checker

The website clarity checker should be implemented as a small client-side component.

It should:

- Let users tick 5-6 checks.
- Calculate a simple clarity score.
- Show a result state.
- Suggest the next practical step.
- Link to contact or WhatsApp.

It should not:

- Pretend to perform a real AI audit if it is only a checklist.
- Require an account.
- Block the user behind a form unless Ian explicitly wants lead capture.

## Forms

The contact form must not rely on `mailto:` as the only submission method.

Acceptable options:

- Netlify Forms.
- Vercel serverless function.
- Formspree.
- Basin.
- Custom API endpoint.

Form requirements:

- Name.
- Business name.
- Email.
- Website or social page.
- Message.
- Success state.
- Error state.
- Basic spam protection.

If no final provider is configured during build, include a clear `TODO` and make the frontend form ready to connect.

## SEO Implementation

The build must include:

- Unique title and meta description per page.
- Open Graph metadata.
- Canonical URLs.
- Sitemap.
- `robots.txt`.
- One H1 per page.
- Clean heading hierarchy.
- Descriptive alt text.
- Internal links.
- Schema where accurate.

Recommended schema:

- Organization.
- LocalBusiness or ProfessionalService if business details are confirmed.
- WebSite.
- BreadcrumbList where useful.
- Article schema for guides.

## Performance Requirements

Targets:

- Lighthouse Performance: 90+ mobile.
- Lighthouse Accessibility: 95+.
- Lighthouse SEO: 95+.
- Lighthouse Best Practices: 95+.

Implementation rules:

- Optimise all images.
- Use responsive image sizes.
- Avoid large JavaScript bundles.
- Avoid loading multiple font families unless necessary.
- Use font-display swap.
- Keep animations lightweight.
- Do not ship unused libraries.

## Accessibility Requirements

The build must include:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient colour contrast.
- Labels for all form fields.
- Descriptive button/link text.
- Reduced motion consideration for animations.
- Alt text for meaningful images.

## Deployment Recommendation

Preferred deployment:

1. Netlify
2. Vercel

Use Netlify if built-in form handling is preferred.

Use Vercel if serverless/API flexibility is preferred.

Do not deploy to production without Ian's approval.

## Package and Script Expectations

Recommended scripts:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

Add linting/formatting only if it does not slow down the initial build unnecessarily.

## What Not To Do

Do not:

- Build a generic React SPA.
- Use WordPress by default.
- Use a heavy UI kit that makes the site look templated.
- Use Tailwind automatically without approval.
- Add unnecessary dependencies.
- Hide core content behind JavaScript.
- Add fake AI functionality.
- Use `mailto:` as the only form method.
- Ignore the brand guidelines.
- Skip mobile testing.

## Build Quality Bar

The final site should feel:

- Fast.
- Premium.
- Custom.
- Easy to maintain.
- SEO-ready.
- Simple for Ian to update.
- Strong enough to use as proof in outreach.

If the stack or implementation makes the site harder to maintain, slower, or more generic, it is the wrong choice.
