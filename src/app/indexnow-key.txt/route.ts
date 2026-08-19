import { NextResponse } from "next/server";

/** Serves the IndexNow verification key at /indexnow-key.txt */
export async function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();
  if (!key) {
    return new NextResponse("Not found", { status: 404 });
  }
  return new NextResponse(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
