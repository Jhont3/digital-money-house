import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieHasAuthToken = request.cookies.has("authToken");
 
  const url = request.nextUrl.clone();

  if (!cookieHasAuthToken && url.pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*"],
};
