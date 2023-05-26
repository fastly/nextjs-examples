// middleware.ts
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
/**
 * @param request { NextRequest }
 * */
export function middleware(request) {
  console.log(request.url);
  return NextResponse.redirect(new URL('/about-2', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
};
