import type { APIRoute } from "astro";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const toEmail = import.meta.env.CONTACT_TO_EMAIL || "hello@vcukwebservices.co.uk";
const fromEmail = import.meta.env.RESEND_FROM_EMAIL || "VCUK Web Services <hello@vcukwebservices.co.uk>";
const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
const listHtml = (items: string[]) => `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
const serviceWords = ["services", "what we do", "we offer", "cleaning", "boarding", "grooming", "treatments", "repairs", "installation", "quote"];
const locationWords = ["cheshire", "winsford", "northwich", "crewe", "nantwich", "chester", "wilmslow", "macclesfield", "areas", "local", "based in", "cover"];
const contactWords = ["contact", "call", "phone", "email", "whatsapp", "book", "enquire", "quote", "tel:", "mailto:"];
const trustWords = ["review", "testimonial", "gallery", "project", "photos", "accredited", "insured", "guarantee", "trusted"];

export const prerender = false;
function normalizeUrl(value: string) { const trimmed = value.trim(); return new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`).toString(); }
function stripHtml(html: string) { return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); }
function includesAny(text: string, words: string[]) { return words.some((word) => text.includes(word)); }
function tag(html: string, pattern: RegExp) { return html.match(pattern)?.[1]?.replace(/\s+/g, " ").trim() || ""; }
function summary(score: number, partial = false) { if (partial) return "The website could not be fully fetched, so this is a partial result. Ian has still received the details and can review the site manually."; if (score >= 80) return "Your website appears to have useful foundations. The next gains are likely to come from sharper proof, clearer service depth, and SEO/content refinement."; if (score >= 60) return "Your website has a useful start, but customers may still need clearer services, stronger proof, or easier contact routes."; if (score >= 40) return "Your website may be making customers work too hard. A clearer structure, stronger proof, and more obvious enquiry route would likely help."; return "Your website appears to need a stronger foundation so customers can quickly understand what you do, where you work, why to trust you, and how to contact you."; }

async function analyse(websiteUrl: string) {
  const normalizedUrl = normalizeUrl(websiteUrl);
  let html = "";
  try {
    const response = await fetch(normalizedUrl, { headers: { "user-agent": "VCUK Website Clarity Checker (+https://vcukwebservices.co.uk)" }, signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error("Fetch failed");
    html = await response.text();
  } catch {
    return { score: 38, headline: "Partial manual-review result", summary: summary(38, true), strengths: ["You shared enough business context for Ian to review the site manually.", "The attempted check gives a starting point for a practical follow-up."], gaps: ["The checker could not fetch the website automatically.", "Services, contact routes, proof, SEO basics, and mobile signals need manual review."], nextSteps: ["Check that the website loads publicly over HTTPS.", "Make sure the first screen says what you do, where you work, and how to enquire.", "Reply to Ian with any Facebook page or current website notes if the URL is unusual."], fetchStatus: "partial", normalizedUrl };
  }
  const lower = html.toLowerCase();
  const text = stripHtml(lower);
  const words = text.split(/\s+/).filter(Boolean).length;
  const title = tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const meta = tag(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i);
  const h1 = (html.match(/<h1[\s>]/gi) || []).length;
  const headings = (html.match(/<h[1-3][\s>]/gi) || []).length;
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
  const hasEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(html);
  const hasPhone = /(\+44|0)\s?\d{3,5}\s?\d{3,4}\s?\d{3,4}/.test(text);
  const hasForm = /<form[\s>]/i.test(html);
  const checks = [
    [15, includesAny(text, serviceWords) && words > 180, "The page appears to explain services or offers in useful detail.", "Services may need clearer wording near the top of the page."],
    [12, includesAny(text, locationWords), "The site includes some location or service-area wording.", "The site may need clearer wording about where the business is based or works."],
    [15, includesAny(lower, contactWords) && (hasEmail || hasPhone || hasForm), "There are detectable contact routes such as phone, email, form, WhatsApp, or booking.", "Contact routes may need to be easier to find and tap on mobile."],
    [14, includesAny(text, trustWords), "The page includes some trust language such as reviews, proof, projects, photos, or guarantees.", "The page may need stronger visible proof such as reviews, photos, project examples, or FAQs."],
    [12, h1 === 1 && headings >= 3, "The page has a detectable heading structure.", "The page structure may need clearer headings and section breaks."],
    [14, title.length >= 20 && meta.length >= 50 && h1 >= 1, "The page has basic SEO signals such as a title, meta description, and heading.", "SEO basics may need work, especially title, meta description, headings, and useful page copy."],
    [12, words > 350 && includesAny(text, serviceWords) && includesAny(text, locationWords), "The page gives search engines and AI tools some useful business context.", "The business may need clearer plain-English context about services, customers, locations, and next steps."],
    [6, hasViewport && normalizedUrl.startsWith("https://") && title.length > 0, "The page has basic detectable mobile and browser setup signals.", "There may be technical basics to check, such as HTTPS, viewport setup, title, and mobile comfort."]
  ] as const;
  const score = checks.reduce((total, check) => total + (check[1] ? check[0] : 0), 0);
  const strengths = checks.filter((check) => check[1]).map((check) => check[2]);
  const gaps = checks.filter((check) => !check[1]).map((check) => check[3]);
  return { score, headline: `${score >= 80 ? "Strong foundation" : score >= 60 ? "Good start" : score >= 40 ? "Needs clearer structure" : "Needs a stronger rebuild"}: ${score}/100`, summary: summary(score), strengths: strengths.length ? strengths : ["The submitted URL was available for review."], gaps: gaps.length ? gaps : ["No major first-pass clarity gaps were detected, but a manual review may still find refinements."], nextSteps: [score < 60 ? "Start by making the first screen clearer: what you do, where you work, and how to enquire." : "Refine the strongest pages with better proof, clearer service detail, and stronger internal links.", "Keep phone, WhatsApp, email, or enquiry form routes obvious on mobile.", score < 50 ? "Consider a one-page website or website refresh to rebuild the enquiry journey." : "Consider SEO foundations or guide content once the page structure is clear."], fetchStatus: "checked", normalizedUrl };
}

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;
  try { body = await request.json(); } catch { return Response.json({ message: "Invalid checker submission." }, { status: 400 }); }
  if (body.company_website) return Response.json({ ok: true });
  const websiteUrl = body.website_url?.trim();
  const businessName = body.business_name?.trim();
  const email = body.email?.trim();
  const businessDescription = body.business_description?.trim();
  if (!websiteUrl || !businessName || !email || !businessDescription || !emailRegex.test(email)) return Response.json({ message: "Please complete all checker fields with a valid email." }, { status: 400 });
  let result;
  try { result = await analyse(websiteUrl); } catch { return Response.json({ message: "Please enter a valid website URL." }, { status: 400 }); }
  const key = import.meta.env.RESEND_API_KEY;
  if (key) {
    const resend = new Resend(key);
    const ianHtml = `<h1>New website check: ${escapeHtml(businessName)} - ${result.score}%</h1><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Website:</strong> ${escapeHtml(result.normalizedUrl)}</p><p><strong>Description:</strong> ${escapeHtml(businessDescription)}</p><p>${escapeHtml(result.summary)}</p><h2>Strengths</h2>${listHtml(result.strengths)}<h2>Gaps</h2>${listHtml(result.gaps)}<h2>Next steps</h2>${listHtml(result.nextSteps)}<p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>`;
    const userHtml = `<h1>Your VCUK website check score</h1><p><strong>${escapeHtml(businessName)}</strong></p><p><strong>Website:</strong> ${escapeHtml(result.normalizedUrl)}</p><p><strong>Score:</strong> ${result.score}/100</p><p>${escapeHtml(result.summary)}</p><h2>Strengths</h2>${listHtml(result.strengths)}<h2>Gaps</h2>${listHtml(result.gaps)}<h2>Practical next steps</h2>${listHtml(result.nextSteps)}<p>Reply to this email or contact hello@vcukwebservices.co.uk. WhatsApp / phone: 07340997571.</p>`;
    await Promise.all([resend.emails.send({ from: fromEmail, to: toEmail, replyTo: email, subject: `New website check: ${businessName} - ${result.score}%`, html: ianHtml }), resend.emails.send({ from: fromEmail, to: email, replyTo: "hello@vcukwebservices.co.uk", subject: "Your VCUK website check score", html: userHtml })]);
  }
  return Response.json(result);
};
export const ALL: APIRoute = () => Response.json({ message: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
