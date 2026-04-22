import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow access to root, public files and Next.js' internal
  if (
    pathname === '/' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') 
  ) {
    return NextResponse.next()
  }

  // Redirect all path to root
  return NextResponse.redirect(new URL('/', request.url))
}

// Middleware configuration for all paths
export const config = {
  matcher: [
    /*
     * Match all path requests, except:
     * - API routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}