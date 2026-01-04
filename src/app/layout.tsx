import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import ParticleBackground from '@/components/ParticleBackground'
import ScrollButtons from '@/components/ScrollButtons'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CanSoftware | Full Stack Developer',
  description: 'Şirketler, bireyler ve projeler için profesyonel yazılım çözümleri. Web geliştirme, mobil uygulama ve özel yazılım hizmetleri.',
  keywords: 'full stack developer, web geliştirme, yazılım hizmetleri, freelance developer, React, Next.js, Node.js, Türkiye, yazılımcı',
  authors: [{ name: 'Caner Tanrıverdi' }],
  creator: 'Caner Tanrıverdi',
  publisher: 'CanSoftware',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/LOGO.png',
    apple: '/LOGO.png',
  },
  openGraph: {
    title: 'CanSoftware | Full Stack Developer',
    description: 'Şirketler, bireyler ve projeler için profesyonel yazılım çözümleri.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'CanSoftware',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'CanSoftware Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CanSoftware | Full Stack Developer',
    description: 'Şirketler, bireyler ve projeler için profesyonel yazılım çözümleri.',
    images: ['/LOGO.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <LoadingScreen />
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <ScrollButtons />
      </body>
    </html>
  )
}
