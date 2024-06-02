import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import type { Metadata } from 'next'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { auth } from '@/auth'

const nunito = Nunito_Sans({ weight: ['200', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'E-commerce',
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
