import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import Providers from './Providers'
import BackToTopButton from '@/components/BackToTopButton'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DEV NEWS',
  description: 'Get the Latest News Anytime Anywhere with DevNews.',
  manifest: '/manifest.json'
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