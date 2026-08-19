import { NextResponse } from "next/server";
import { getAllContentPaths, getSiteUrl } from "@/lib/seo";

export const runtime = "nodejs";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/** POST — notify Bing/Yandex of sitemap URLs (call after deploy or from CI). */
export async function POST(req: Request) {
  const secret = process.env.INDEXNOW_SECRET?.trim();
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!secret || !key) {
    return NextResponse.json(
      { error: "IndexNow is not configured (INDEXNOW_KEY / INDEXNOW_SECRET)" },
      { status: 503 },
    );
  }

  const auth = req.headers.get("authorization");
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const siteUrl = getSiteUrl();
  const urlList = getAllContentPaths().map((path) => `${siteUrl}${path}`);

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(siteUrl).hostname,
      key,
      keyLocation: `${siteUrl}/indexnow-key.txt`,
      urlList,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return NextResponse.json(
      { error: "IndexNow rejected the submission", status: res.status, detail },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, submitted: urlList.length });
}
