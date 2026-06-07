import { NextResponse } from "next/server";
import { profile } from "@/lib/content";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 422 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || profile.email;

  // If Resend is configured, deliver the email. Otherwise accept gracefully
  // (the form also offers a direct mailto: link as a guaranteed path).
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
          to: [to],
          reply_to: email,
          subject: `Portfolio contact — ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend error:", detail);
        return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
      }
    } catch (e) {
      console.error("Contact send failed:", e);
      return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
    }
  } else {
    // No provider configured yet — log server-side; visitor uses mailto as fallback.
    console.info(`[contact] ${name} <${email}>: ${message}`);
  }

  return NextResponse.json({ ok: true });
}
