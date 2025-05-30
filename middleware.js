import { NextResponse } from "next/server";

// Define supported locales
const locales = ['en-IN', 'en-US'];
const defaultLocale = 'en-US';

// Function to get locale based on country
function getLocaleFromRequest(request) {
  // You can use a geolocation service here
  // For now, we'll use a simple header check (in production, use a proper IP-based detection)
  const country = request.headers.get('x-country') || 'US';
  return country === 'IN' ? 'en-IN' : 'en-US';
}

export function middleware(request) {
  // Check if pathname already has locale
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocaleFromRequest(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};