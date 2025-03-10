// import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PATH } from "./shared/path";

export async function middleware(request: NextRequest) {
  // Skip middleware for RSC requests
  if (
    request.headers.get("RSC") === "1" ||
    request.headers.get("Next-Router-State-Tree") ||
    request.headers.get("Next-Router-Prefetch")
  ) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;

  if (pathname === "/s") {
    return NextResponse.redirect(PATH.HOME);
  }
}

export const config = {
  matcher: ["/", "/s/:slug"],
};
