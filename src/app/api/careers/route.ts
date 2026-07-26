import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/seo";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
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

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isHttpUrl(value: string) {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

type Answer = { id?: string; label?: string; value?: string };

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

  if (String(body.website ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const linkedin = String(body.linkedin ?? "").trim();
  const city = String(body.city ?? "").trim();
  const role = String(body.role ?? "").trim();
  const roleLabel = String(body.roleLabel ?? role).trim();
  const videoUrl = String(body.videoUrl ?? "").trim();
  const lang = String(body.lang ?? "fr").trim();
  const answers = Array.isArray(body.answers)
    ? (body.answers as Answer[])
    : [];

  if (!name || name.length > 120) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (!email || !isEmail(email) || email.length > 200) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (!city || city.length > 120) {
    return NextResponse.json({ ok: false, error: "invalid_city" }, { status: 400 });
  }
  if (!role || role.length > 80) {
    return NextResponse.json({ ok: false, error: "invalid_role" }, { status: 400 });
  }
  if (!videoUrl || !isHttpUrl(videoUrl) || videoUrl.length > 500) {
    return NextResponse.json({ ok: false, error: "invalid_video" }, { status: 400 });
  }
  if (answers.length < 3 || answers.length > 12) {
    return NextResponse.json(
      { ok: false, error: "invalid_answers" },
      { status: 400 },
    );
  }
  for (const a of answers) {
    const value = String(a.value ?? "").trim();
    if (value.length < 40 || value.length > 4000) {
      return NextResponse.json(
        { ok: false, error: "invalid_answers" },
        { status: 400 },
      );
    }
  }

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || "Remparia <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  const answersText = answers
    .map(
      (a, i) =>
        `--- Q${i + 1}: ${String(a.label ?? a.id ?? "")}\n${String(a.value ?? "").trim()}`,
    )
    .join("\n\n");

  const { error } = await resend.emails.send({
    from,
    to: [SITE.email],
    replyTo: email,
    subject: `[Carrières Remparia] ${name} — ${roleLabel}`,
    text: [
      `Langue: ${lang}`,
      `Nom: ${name}`,
      `Email: ${email}`,
      `LinkedIn: ${linkedin || "—"}`,
      `Ville: ${city}`,
      `Profil: ${roleLabel} (${role})`,
      `Vidéo: ${videoUrl}`,
      "",
      answersText,
    ].join("\n"),
  });

  if (error) {
    console.error("[careers]", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
