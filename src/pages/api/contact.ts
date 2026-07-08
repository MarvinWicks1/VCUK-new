import type { APIRoute } from "astro";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const toEmail = import.meta.env.CONTACT_TO_EMAIL || "hello@vcukwebservices.co.uk";
const fromEmail = import.meta.env.RESEND_FROM_EMAIL || "VCUK Web Services <hello@vcukwebservices.co.uk>";
const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;
  try { body = await request.json(); } catch { return Response.json({ message: "Invalid form submission." }, { status: 400 }); }
  if (body.company_website) return Response.json({ ok: true });

  const name = body.name?.trim();
  const businessName = body.business_name?.trim();
  const email = body.email?.trim();
  const websiteOrSocial = body.website_or_social?.trim() || "Not provided";
  const message = body.message?.trim();

  if (!name || !businessName || !email || !message || !emailRegex.test(email)) {
    return Response.json({ message: "Please complete the required fields with a valid email." }, { status: 400 });
  }

  const key = import.meta.env.RESEND_API_KEY;
  if (!key) return Response.json({ message: "Email is not configured yet. Please use hello@vcukwebservices.co.uk or WhatsApp Ian." }, { status: 503 });

  const resend = new Resend(key);
  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `New VCUK enquiry: ${businessName}`,
    html: `<h1>New VCUK enquiry</h1><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Business:</strong> ${escapeHtml(businessName)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Website or social:</strong> ${escapeHtml(websiteOrSocial)}</p><h2>Message</h2><p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>`
  });
  return Response.json({ ok: true });
};

export const ALL: APIRoute = () => Response.json({ message: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } });
