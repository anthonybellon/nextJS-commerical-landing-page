import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames, exclude API routes
  matcher: ['/((?!api|_next|static|.*\\..*).*)', '/(en|fr)/:path*'],
};
