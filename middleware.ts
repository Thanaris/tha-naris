// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'it', 'de'],
  defaultLocale: 'en',
  localeDetection: true
});

export const config = {
  matcher: ['/', '/(en|it|de)/:path*']
};
