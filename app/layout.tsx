import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import Providers from './Providers'
import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'THE DEV NEWS',
  description: 'The Dev News - Get the Latest News Anytime Anywhere with DevNews.',
  applicationName: 'THE DEV NEWS',
  manifest: '/manifest.json',
  metadataBase: new URL('https://dev-news-793.vercel.app'),
  creator: 'Dhawal Vijayvargiya',
  authors: [
    {
      name: 'Dhawal Vijayvargiya',
      url: 'htps://github.com/dhawal-793'
    }
  ],
  keywords: ['dev-news', 'open-source', 'dev', 'dev news', 'nextjs project', 'mediastck', 'news', 'news app', 'news web app', 'nextjs pwa app'],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f4f6' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
  openGraph: {
    title: 'THE DEV NEWS',
    description: 'The Dev News - Get the Latest News Anytime Anywhere with DevNews.',
    siteName: 'THE DEV NEWS',
    url: 'https://dev-news-793.vercel.app/',
    images: '/og-image.png',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE DEV NEWS',
    description: 'The Dev News - Get the Latest News Anytime Anywhere with DevNews.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  category: 'technology',
  alternates: {
    canonical: 'https://dev-news-793.vercel.app'
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light dark:bg-dark transition-all duration-1000 selection:bg-accent `} >
        <Providers>
          <div className="p-5">
            <Header />
            <main className="max-w-6xl mx-auto ">
              {children}
            </main>
          </div>
          <BackToTopButton />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}