import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

import { auth } from '@/auth'
import Footer from '@/components/footer'
import Header from '@/components/header'

const nunito = Nunito_Sans({ weight: ['200', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Shop',
  description: 'E-commerce website built with Next.js 14',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={nunito.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  )
}
