import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: Request) {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  if (!req.body) {
    return NextResponse.json({ ok: false, error: "empty" }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const filename =
    searchParams.get("filename")?.replace(/[^\w.-]+/g, "") ||
    `careers-${Date.now()}.webm`;
  const contentType = req.headers.get("content-type") || "video/webm";

  try {
    const blob = await put(`careers/${filename}`, req.body, {
      access: "public",
      contentType,
      token,
      addRandomSuffix: true,
      multipart: true,
    });
    return NextResponse.json({ ok: true, url: blob.url });
  } catch (err) {
    console.error("[careers/video]", err);
    return NextResponse.json({ ok: false, error: "upload_failed" }, { status: 502 });
  }
}
