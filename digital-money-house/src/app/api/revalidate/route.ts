import type { NextRequest } from 'next/server'
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  revalidateTag("user-info");

  const tag = request.nextUrl.searchParams.get('revalidate-cards')
  console.log(tag);
  if (tag) {
    revalidateTag(tag)
  }
  return Response.json({ revalidated: true, now: Date.now() })
}
