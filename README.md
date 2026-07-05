# VCUK Web Services

Premium, practical Astro website for VCUK Web Services. The site is built for small UK service businesses that need clearer services, proof, pricing, and enquiry routes.

## Tech stack

- Astro
- TypeScript
- Lightweight CSS with VCUK brand tokens
- Vercel serverless API routes
- Resend for contact form and website checker emails

## Local setup

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run check
npm run build
npm run preview
```

## Required environment variables

Do not commit real secrets.

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL="VCUK Web Services <hello@your-verified-domain.co.uk>"
CONTACT_TO_EMAIL=hello@vcukwebservices.co.uk
```

`CONTACT_TO_EMAIL` defaults to `hello@vcukwebservices.co.uk` if omitted.

## Forms

- `/api/contact` sends contact form submissions to Ian.
- `/api/checker` runs the automatic website clarity checker, returns the score to the visitor, emails Ian the lead details, and emails the user their result.
- Both endpoints include validation and a honeypot field.
- The forms do not use `mailto:` as the submission method.

## Vercel deployment notes

The project uses the Astro Vercel serverless adapter. Add the Resend environment variables in Vercel before testing forms in a deployed environment.

Do not deploy to production without Ian's approval.
