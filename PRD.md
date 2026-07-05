# Product Requirements Document: VCUK Web Services Website Redesign

## 1. Overview

VCUK Web Services needs a full website redesign that positions the business as a premium but practical web design and SEO service for small UK service businesses.

The site must compete with established Cheshire web agencies while avoiding generic agency presentation. It should prove VCUK's capability through design quality, clear messaging, useful content, transparent pricing, and a strong conversion journey.

This PRD defines the requirements for a future build. It does not require implementation in this phase.

## 2. Problem Statement

The current website has useful content and clear intent, but it risks feeling:

- Too basic for a web design business.
- Too close to a generic small-agency template.
- Light on premium proof.
- Not visually strong enough to showcase what VCUK can do.
- Not sharp enough against competitors with more reviews and visible portfolio depth.

VCUK needs a website that makes prospects think:

> If Ian can make his own site feel this clear and polished, he can do that for my business too.

## 3. Goals

### Business Goals

- Increase trust from cold outreach prospects.
- Convert more visitors into email, WhatsApp, or quote enquiries.
- Support pricing from £350 upward without looking cheap.
- Make VCUK feel credible despite being a smaller operation.
- Create a platform for weekly guides and local SEO growth.
- Give Ian a stronger sales asset when contacting Facebook-first local businesses.

### User Goals

Visitors should be able to:

- Understand what VCUK does within 5 seconds.
- See whether VCUK works with businesses like theirs.
- Understand likely pricing before contacting.
- See proof, examples, or concept work.
- Learn what a good small business website should include.
- Contact Ian easily from mobile.

### Design Goals

- Premium, modern, and highly usable.
- Human and local, not corporate.
- Distinctive enough to avoid template feel.
- Clear visual proof of website design ability.
- Fast and comfortable on mobile.

## 4. Non-Goals

The redesign should not:

- Become a broad digital agency site pretending to offer everything.
- Hide pricing behind vague "contact us" language.
- Use fake case studies.
- Use generic AI-written copy.
- Use heavy effects that damage performance.
- Rely on decorative abstract visuals instead of real website proof.
- Overcomplicate the offer.

## 5. Target Users

### Primary User: Local Service Business Owner

Example businesses:

- Cleaner
- Dog walker or pet-care provider
- Joiner, landscaper, or home improvement specialist
- Beauty or wellness provider
- Car detailer
- Local mechanic or tyre/exhaust service

Needs:

- More enquiries.
- Better first impression.
- One clear place for services, reviews, photos, prices, and contact.
- Simple website process.
- Transparent price.

Concerns:

- Cost.
- Not knowing what is included.
- Being trapped in monthly fees.
- Not understanding websites.
- Worrying a website will be a hassle.

### Secondary User: Established Business With Weak Website

Needs:

- Redesign.
- Better SEO foundations.
- Better mobile experience.
- Stronger service pages and enquiry journey.

Concerns:

- Losing current content or rankings.
- Scope creep.
- Whether redesign will actually improve enquiries.

## 6. Positioning

Primary positioning:

> Clearer websites for local businesses that need more enquiries, not more confusion.

Supporting positioning:

> VCUK Web Services builds fast, polished, mobile-first websites for small UK service businesses, with clear pricing, practical SEO foundations, and direct support from Ian.

Differentiators:

- Direct with Ian.
- Practical small-business focus.
- Transparent entry pricing.
- Strong fit for Facebook-first businesses.
- Honest advice before upselling.
- Clear website structure and conversion thinking.

## 7. Required Pages

### 7.1 Home

Purpose:

- Establish the offer.
- Show premium quality.
- Communicate trust and pricing.
- Route users to pricing, work, and contact.

Required sections:

- Hero with strong H1, short copy, CTA, trust strip, and premium website visual.
- Problem section around scattered proof and unclear online presence.
- Service/package overview.
- Why VCUK / why direct with Ian.
- Work showcase with real and labelled concept examples.
- Website clarity checker.
- Process.
- Guide previews.
- Final CTA.

Acceptance criteria:

- H1 is specific and benefit-led.
- Primary CTA visible above the fold on mobile and desktop.
- Pricing entry point visible on homepage.
- At least one proof/example section visible before final CTA.

### 7.2 Services

Purpose:

- Explain what VCUK offers and when each service is right.

Required services:

- One-page websites.
- Starter websites.
- Website redesigns.
- SEO foundations.
- Website care and updates.

Acceptance criteria:

- Each service explains who it is for, what it solves, and what is included.
- Each service links to pricing or contact.
- Copy avoids jargon.

### 7.3 Pricing

Purpose:

- Build trust through transparent starting prices and clear scope.

Required packages:

- One-Page Website: from £350.
- Starter Website: from £950.
- Website Refresh: from £750.
- Business Website: from £1,500 or revised range if Ian confirms.
- SEO Foundations: from £250.
- Monthly Support: from £50/month.

Acceptance criteria:

- Prices are easy to compare.
- "From" pricing is explained.
- Scope inclusions and exclusions are stated.
- FAQs address ownership, hosting, domains, support, and cancellation.

### 7.4 Work

Purpose:

- Demonstrate capability and proof.

Required content:

- Real client work first.
- Playful Paws Home Boarding case study.
- Labelled concept builds for target niches.
- Clear distinction between live projects and example builds.

Acceptance criteria:

- No fake client claims.
- Each project includes business type, challenge, approach, and relevant features.
- Visuals are screenshots or realistic website previews, not generic icons.

### 7.5 Guides

Purpose:

- Build trust, support SEO, and create outreach follow-up assets.

Required features:

- Guide listing.
- Categories.
- Reading time.
- Short summaries.
- Internal links to services/contact.

Acceptance criteria:

- Guides use plain English.
- Page supports weekly publishing.
- Guide cards look editorial and credible.

### 7.6 About

Purpose:

- Make Ian trustworthy and real.

Required content:

- Personal introduction.
- Why VCUK exists.
- Values.
- Who VCUK helps.
- How Ian works.

Acceptance criteria:

- Does not pretend VCUK is a large agency.
- Builds confidence through honesty and clarity.

### 7.7 Contact

Purpose:

- Make starting a conversation easy.

Required contact routes:

- Email.
- WhatsApp.
- Contact form.

Required form fields:

- Name.
- Business name.
- Email.
- Website or social page.
- What do you need help with?

Acceptance criteria:

- Form works without relying on `mailto:`.
- Contact routes are tappable on mobile.
- Page explains that a rough message is enough.

## 8. Functional Requirements

### Navigation

- Sticky or persistent header may be used if it does not crowd mobile.
- Navigation items: Services, Work, Pricing, Guides, About, Contact.
- Primary CTA: Get a quote or Contact Ian.

### Website Checker

The homepage should include an interactive website clarity checker.

Requirements:

- 5-6 checklist questions.
- Score/result state.
- Result recommends a sensible next step.
- CTA to contact Ian.
- Must work without external dependencies.

### Forms

- Contact form must submit reliably through a form provider, backend endpoint, or static hosting form support.
- Error and success states required.
- Spam protection required.
- Do not use `mailto:` as the only form submission method.

### Analytics

Track:

- Contact form submissions.
- Email clicks.
- WhatsApp clicks.
- CTA clicks.
- Pricing page visits.
- Website checker completions.

Implementation may use privacy-friendly analytics or GA4 if preferred.

## 9. Content Requirements

### Tone

Plain, direct, confident, and human.

The copy should sound like Ian explaining things clearly to a business owner, not like a corporate marketing department.

### Proof

Use:

- Real testimonial from Playful Paws if approved.
- Screenshots of live/client work.
- Clearly labelled concept examples.
- Practical explanations of what each site section does.

### Calls To Action

Primary CTA examples:

- Get a website quote.
- Contact Ian.
- Start the conversation.
- Ask about a one-page website.

Secondary CTA examples:

- See the work.
- View pricing.
- Read the guides.
- WhatsApp Ian.

## 10. SEO Requirements

Each page must include:

- Unique title tag.
- Unique meta description.
- One H1.
- Logical heading hierarchy.
- Open Graph title and description.
- Descriptive image alt text.
- Internal links.

Site-level:

- `robots.txt`.
- `sitemap.xml`.
- Organization schema.
- LocalBusiness or ProfessionalService schema if details are confirmed.
- Fast Core Web Vitals.
- Clean URLs.

Suggested URL structure:

- `/`
- `/services/`
- `/pricing/`
- `/work/`
- `/guides/`
- `/guides/[slug]/`
- `/about/`
- `/contact/`

Future SEO landing pages:

- `/web-design-cheshire/`
- `/web-design-winsford/`
- `/one-page-websites/`
- `/website-redesigns/`
- `/website-care-plans/`

## 11. Performance Requirements

Targets:

- Lighthouse Performance: 90+ on mobile.
- Lighthouse Accessibility: 95+.
- Lighthouse Best Practices: 95+.
- Lighthouse SEO: 95+.
- Largest Contentful Paint: under 2.5 seconds on a typical mobile connection.
- Cumulative Layout Shift: under 0.1.

Implementation guidance:

- Optimise images.
- Use responsive images.
- Avoid heavy animation libraries.
- Keep JavaScript minimal.
- Use semantic HTML.
- Preload only critical assets.

## 12. Accessibility Requirements

- Keyboard navigable.
- Visible focus states.
- Sufficient colour contrast.
- Labels for all form fields.
- Meaningful link text.
- Alt text for meaningful images.
- Decorative images hidden from assistive tech.
- No text embedded in images unless repeated in HTML.

## 13. Design Requirements

The site must:

- Feel premium and custom.
- Avoid template-like card grids as the dominant structure.
- Use real website visuals and screenshots.
- Keep sections clean and scannable.
- Make CTAs obvious without shouting.
- Work beautifully on mobile.

Visual QA must check:

- Mobile header and CTA spacing.
- No text overflow.
- No overlapping sections.
- No hidden CTAs.
- Hero visual remains readable on small screens.

## 14. Build Rules

See `RULES.md` for detailed rules. The most important are:

- No fake proof.
- No generic AI copy.
- No stock-photo agency feel.
- No hidden pricing.
- No inaccessible UI.
- No slow decorative effects.

## 15. Measurement Plan

Primary KPIs:

- Contact enquiries.
- WhatsApp clicks.
- Email clicks.
- Quote requests.

Secondary KPIs:

- Pricing page visits.
- Work page visits.
- Guide visits.
- Website checker completions.
- Organic traffic growth.

Sales support metrics:

- Reply rate from outreach before redesign vs after redesign.
- Number of prospects who mention the website positively.
- Number of prospects who visit pricing/work before replying.

## 16. Risks

Risk: Site looks too cheap because of low starting price.
Mitigation: Frame £350 as focused, limited, and practical. Use premium design and clear scope.

Risk: Lack of portfolio depth weakens trust.
Mitigation: Use honest concept builds and label them clearly.

Risk: Copy sounds AI-generated.
Mitigation: Use specific local business examples and Ian's plain-English tone.

Risk: Site becomes too broad.
Mitigation: Keep the core offer focused on websites, redesigns, SEO foundations, and care.

Risk: Redesign becomes visual but not commercial.
Mitigation: Every section must answer a customer question or move the user toward contact.

## 17. Launch Checklist

Before launch:

- All pages written and proofread.
- All CTAs tested.
- Contact form tested.
- WhatsApp link tested.
- Email link tested.
- Mobile layouts checked.
- Lighthouse checks run.
- Metadata checked.
- Sitemap and robots generated.
- Analytics events configured.
- Schema validated.
- No placeholder copy.
- No unlabelled concept/fake work.
- Ian approves pricing and claims.

## 18. Open Questions

- Confirm final logo files and brand colours.
- Confirm whether Ian wants to show a personal photo.
- Confirm preferred form handling method.
- Confirm exact package names and prices.
- Confirm hosting/deployment platform.
- Confirm whether care plans require contract terms.
- Confirm whether client owns the site files after payment.
- Confirm whether domains/hosting are included or separate.
