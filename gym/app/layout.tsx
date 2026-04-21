import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Gym - Transform Your Body',
  description: 'Premium gym with personal training, group classes, yoga. Join our community for results.',
  keywords: 'gym, fitness, personal training, group classes, yoga, membership',
  openGraph: {
    title: 'Elite Gym',
    description: 'Transform your body with Elite Gym',
    images: '/og-image.jpg',
    siteName: 'Elite Gym',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>

        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  )
}
