import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import { siteConfig } from './data/site'
import { LanguageProvider } from './contexts/LanguageContext'
import { CartProvider } from './contexts/CartContext'
import { shopConfig } from './shops/dogra-associates/config'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export function generateMetadata(): Metadata {
  const requestHeaders = headers()
  const forwardedHost = requestHeaders.get('x-forwarded-host')
  const host = forwardedHost || requestHeaders.get('host')
  const forwardedProtocol = requestHeaders.get('x-forwarded-proto')
  const protocol = forwardedProtocol || (host?.startsWith('localhost') ? 'http' : 'https')
  const publicUrl = host ? `${protocol}://${host}` : siteConfig.url
  const metadataBase = new URL(publicUrl)
  const imageUrl = new URL(`${shopConfig.assets.cover}?v=20260723`, metadataBase).toString()

  return {
    metadataBase,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.credits.designer,
    alternates: { canonical: publicUrl },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: publicUrl,
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1920,
          height: 908,
          alt: 'Club72 premium gym in Mohali',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data for LocalBusiness
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.seo.description,
    areaServed: {
      '@type': 'City',
      name: 'Mohali',
    },
    location: {
      '@type': 'Place',
      name: 'Mohali, Punjab, India',
    },
    telephone: `+91${siteConfig.contact.phones[0]}`,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address,
      addressLocality: 'Sahibzada Ajit Singh Nagar',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    serviceType: 'Gym, fitness training, swimming, sports, wellness and recovery',
    sameAs: [
      siteConfig.social?.facebook,
      siteConfig.social?.instagram,
      siteConfig.social?.twitter,
      siteConfig.social?.linkedin,
    ].filter(Boolean),
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            background: #191A19;
            min-height: 100%;
            color: #ffffff;
          }
        ` }} />
      </head>
      <body className={`${poppins.className} antialiased min-h-screen`} style={{ 
        background: '#191A19',
        color: '#ffffff',
      }}>
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
