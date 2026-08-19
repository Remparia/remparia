import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getContactFormApiError,
  normalizeContactInput,
} from "@/lib/contact-form-validation";
import { getContactFromEmail, getContactToEmail } from "@/lib/contact-email";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_PER_WINDOW) return false;
  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  if (!rateLimit(clientIp(req))) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const honeypot = String(body.website ?? "").trim();
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const raw = {
    name: String(body.name ?? ""),
    company: String(body.company ?? ""),
    email: String(body.email ?? ""),
    message: String(body.message ?? ""),
  };
  const validationError = getContactFormApiError(raw);
  if (validationError) {
    return NextResponse.json(
      { ok: false, error: validationError },
      { status: 400 },
    );
  }

  const { name, company, email, message } = normalizeContactInput(raw);

  const from = getContactFromEmail();
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [getContactToEmail()],
    replyTo: email,
    subject: `[Contact Remparia] ${name} — ${company}`,
    text: [
      `Nom: ${name}`,
      `Entreprise: ${company}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
