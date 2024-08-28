import {revalidateTag} from "next/cache";

export async function GET() {
  revalidateTag("user-info");
  revalidateTag("revalidate-all");

  return Response.json({revalidate: true});
}
