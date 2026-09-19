import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE } from '@/shared/constants/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.atanajanitorial.com'),
  title: {
    default: 'Atana Janitorial Services | Cleaning Company in Kitchener-Waterloo',
    template: '%s | Atana Janitorial Services',
  },
  description:
    'Insured, background-checked cleaners serving Kitchener-Waterloo and the Waterloo Region. Residential, commercial, move-in/move-out, post-renovation, and Airbnb cleaning. Free estimates.',
  keywords: SITE.keywords,
  openGraph: {
    title: 'Atana Janitorial Services | Cleaning Company in Kitchener-Waterloo',
    description:
      'Insured, background-checked cleaners serving Kitchener-Waterloo and the Waterloo Region. Free estimates on residential and commercial cleaning.',
    url: 'https://www.atanajanitorial.com',
    siteName: SITE.name,
    images: ['/images/atana/hero.jpg'],
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
