import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

import Footer from '@/components/footer'

const nunito = Nunito_Sans({ weight: ['200', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'E-commerce',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
