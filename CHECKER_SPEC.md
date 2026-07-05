# VCUK Automatic Website Checker Specification

This file defines the required website checker behaviour for the VCUK Web Services rebuild.

The checker must not be a manual tick-box checklist. The original intended VCUK checker is an automatic website check that accepts business details, analyses the submitted website URL, shows a score and summary to the user, and emails Ian and the user a copy of the result.

## Purpose

The checker should act as a useful lead magnet and trust-building tool.

It should help small business owners understand whether their current website clearly explains:

- What they do.
- Where they work.
- Who they help.
- How people can contact them.
- Whether key trust signals are visible.
- Whether the site has basic SEO and AI-readiness signals.

It should also send Ian enough context to follow up intelligently.

## User Flow

1. User visits the website checker section or page.
2. User enters:
   - Website URL.
   - Business name.
   - Email address.
   - Short business description.
3. User submits the form.
4. The system fetches and analyses the submitted website URL where possible.
5. The system calculates a score.
6. The system displays the score and summary on screen.
7. The system emails Ian the full result and lead details.
8. The system emails the user their score, summary, and practical next steps.
9. The result should include a CTA to contact Ian or reply for help.

## Form Fields

Required fields:

- `website_url`
- `business_name`
- `email`
- `business_description`

Optional anti-spam field:

- `company_website` honeypot field hidden from users.

Validation:

- Website URL is required and should be normalised to include `https://` if missing.
- Business name is required.
- Email must be valid.
- Business description should be short but meaningful.
- Honeypot submissions should return success without sending email.

## Analysis Checks

The checker should inspect the submitted website and score practical areas such as:

| Check | What To Look For |
|---|---|
| Services explained | Does the page clearly explain what the business does? |
| Area covered | Does the page mention locations, service areas, or local relevance? |
| Contact options | Is it easy to find phone, email, form, WhatsApp, booking, or enquiry routes? |
| Trust signals | Are reviews, testimonials, project photos, accreditations, guarantees, or real proof visible? |
| Page structure | Are headings, sections, and page content structured clearly? |
| SEO basics | Are title, meta description, headings, and useful page copy present? |
| AI-readiness | Does the page clearly describe the business in a way search engines and AI tools can understand? |
| Mobile/UX warning signs | Where detectable, does the page avoid obvious blockers such as missing viewport, broken title, or very thin content? |

The checker does not need to be a perfect SEO audit. It should be a practical first-pass clarity check.

## Scoring

Use a score from 0 to 100.

Suggested weighting:

- Services explained: 15
- Area covered: 12
- Contact options: 15
- Trust signals: 14
- Page structure: 12
- SEO basics: 14
- AI-readiness clarity: 12
- Technical/mobile basics: 6

Score bands:

- 80-100: Strong foundation, likely needs SEO/content refinement.
- 60-79: Good start, but clearer structure or stronger proof may help.
- 40-59: Website likely needs a refresh or clearer enquiry journey.
- 0-39: Website likely needs a stronger rebuild or starter structure.

## Result Display

After submission, show:

- Score as a percentage.
- Short headline.
- Plain-English summary.
- Key strengths found.
- Key gaps found.
- Practical next steps.
- CTA to contact Ian.
- CTA to WhatsApp Ian.

Do not use scary or exaggerated language.

Example result copy style:

> Your website has some useful foundations, but customers may still need clearer services, stronger proof, and easier contact routes.

## Emails

Use Resend.

### Email To Ian

Send to:

- `hello@vcukwebservices.co.uk`

Subject example:

- `New website check: [Business Name] - [Score]%`

Include:

- Business name.
- User email.
- Website URL.
- Business description.
- Score.
- Summary.
- Strengths.
- Gaps.
- Recommended next step.
- Timestamp.

### Email To User

Send to submitted user email.

Subject example:

- `Your VCUK website check score`

Include:

- Business name.
- Website URL.
- Score.
- Plain-English summary.
- Strengths.
- Gaps.
- Practical next steps.
- Ian's contact details.
- Reply-to should go to `hello@vcukwebservices.co.uk`.

## Resend Requirements

Use environment variables:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_TO_EMAIL`, defaulting to `hello@vcukwebservices.co.uk`

Never commit real secrets.

## Vercel Requirements

Implement the checker with a Vercel-compatible API route/serverless function.

The API route should:

- Accept POST requests only.
- Validate input.
- Normalise URL.
- Fetch the submitted page server-side.
- Analyse the returned HTML safely.
- Generate a result object.
- Send both emails through Resend.
- Return the score and summary JSON to the frontend.

If the URL cannot be fetched:

- Return a helpful result rather than a hard failure where possible.
- Explain that the site could not be fully checked.
- Still email Ian with the attempted submission.
- Show a partial/manual-review result to the user.

## Frontend Requirements

The frontend should include:

- Polished VCUK-branded checker form.
- Loading state.
- Success/result state.
- Error state.
- Accessible labels.
- Honeypot field.
- Clear privacy reassurance, e.g. `Ian will receive a copy so he can follow up if you ask for help.`

## Important Rules

Do not:

- Build the old manual checkbox checker as the main checker.
- Pretend the checker is advanced AI if it is rule-based.
- Require account creation.
- Hide the result behind a sales call.
- Send emails without validating the form.
- Commit Resend secrets.

The checker should feel useful, honest, and practical. It is a lead magnet, but it should genuinely give the user a helpful first answer.
