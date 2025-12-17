import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import {
  NextResponse,
} from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AllLocales, AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
  '/onboarding(.*)',
  '/:locale/onboarding(.*)',
  '/api(.*)',
  '/:locale/api(.*)',
]);

// Helper function to extract the locale for locale-aware redirects
const getLocalePrefix = (pathname) => {
  const segment = pathname.split('/')[1];
  // Check if the segment is a valid locale defined in AppConfig
  if (AllLocales.includes(segment)) {
    return `/${segment}`; // Returns e.g., '/en'
  }
  return `/${AppConfig.defaultLocale}`; // Default to default locale if no locale in path
};

export default function middleware(
  request,
  event,
) {
  // Original conditional structure preserved
  if (
    request.nextUrl.pathname.includes('/sign-in')
    || request.nextUrl.pathname.includes('/sign-up')
    || isProtectedRoute(request)
  ) {
    // We wrap the custom logic in clerkMiddleware and return the call to ensure Clerk's redirects run first
    return clerkMiddleware(async (auth, req) => {
      // 1. Protection Logic (Authentication check)
      if (isProtectedRoute(req)) {
        // Use the robust helper function instead of the buggy regex
        const locale = getLocalePrefix(req.nextUrl.pathname);

        // Construct the locale-aware sign-in URL
        const signInUrl = new URL(`${locale}/sign-in`, req.url);

        await auth.protect({
          unauthenticatedUrl: signInUrl.toString(),
        });
        // If authentication fails, Clerk performs a redirect here.
      }

      // 2. Organization Selection Logic (Runs only AFTER successful auth)
      const authObj = await auth();

      // Check: 1) Logged in, 2) No Org ID, 3) Accessing protected route, 4) Not already on the selection page
      if (
        authObj.userId
        && !authObj.orgId
        && isProtectedRoute(req) // Use the robust matcher here
        && !req.nextUrl.pathname.includes('/organization-selection')
      ) {
        const locale = getLocalePrefix(req.nextUrl.pathname);

        // FIX: Redirect to the locale-aware organization selection page
        const orgSelection = new URL(
          `${locale}/onboarding/organization-selection`,
          req.url,
        );

        return NextResponse.redirect(orgSelection);
      }

      // 3. Final execution: Pass the request to next-intl
      return intlMiddleware(req);
    })(request, event);
  }

  // If the request is public and not an auth route, pass it to next-intl.
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next|monitoring).*)', '/', '/(api|trpc)(.*)'],
};
