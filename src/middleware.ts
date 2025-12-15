import { NextRequest, NextResponse } from 'next/server';

const supportedLangs = ['es', 'en', 'eu'];
const defaultLang = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Middleware path:', pathname);

  // If the path is the root, redirect to the default language
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLang}`, request.url));
  }

  // Check if the path already has a supported language
  const hasLang = supportedLangs.some((lang) => pathname.startsWith(`/${lang}`));
  
  if (!hasLang) {
    // If no language is present, redirect to the default language, keeping the path
    return NextResponse.redirect(new URL(`/${defaultLang}${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|locales|images).*)',
  ],
};
