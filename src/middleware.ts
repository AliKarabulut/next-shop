import NextAuth from 'next-auth'

import authConfig from '@/auth.config'
import { DEFAULT_LOGIN_REDIRECT, apiAuthRoute, authRoutes, privateRoutes } from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth(req => {
  const { nextUrl } = req
  const isLoggedIn = req.auth
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRoute)
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) return

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return
  }

  if (!isLoggedIn && isPrivateRoute) {
    return Response.redirect(new URL('/login', nextUrl))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico|[^\\.]+\\..+).*)'],
}
