import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'

import authConfig from '@/auth.config'
import client from '@/libs/prismadb'
import { getTwoFactorConfirmationByUserId } from '@/libs/two-factor-confirmation'
import { getUserAccounts, getUserById } from '@/libs/user'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  events: {
    async linkAccount({ user }) {
      await client.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    authorized: ({ request, auth }) => {
      console.log('authorized', request, auth)
      return true
    },

    async signIn({ user, account }) {
      if (!user.id) return false
      if (account?.provider !== 'credentials') return true

      const existingUser = await getUserById(user.id)

      if (!existingUser?.emailVerified) return false

      if (existingUser?.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

        if (!twoFactorConfirmation) return false

        await client.twoFactorConfirmation.delete({
          where: {
            id: twoFactorConfirmation.id,
          },
        })
      }

      return true
    },

    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as 'ADMIN' | 'USER'
      }

      if (token.isTwoFactorEnabled && session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
      }

      return session
    },

    async jwt({ token }) {
      if (!token.sub) return token
      const user = await getUserById(token.sub)

      if (!user) return token

      const existingAccount = await getUserAccounts(user.id)

      token.isOAuth = !!existingAccount
      token.name = user.name
      token.email = user.email
      token.role = user.role
      token.isTwoFactorEnabled = user.isTwoFactorEnabled
      return token
    },
  },
  adapter: PrismaAdapter(client),
  session: { strategy: 'jwt' },
  ...authConfig,
})
