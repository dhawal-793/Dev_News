import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Header from '../components/Header'
import Providers from './Providers'
import BackToTopButton from '@/components/BackToTopButton'

export const metadata = {
  title: 'DEV NEWS',
  description: 'Get the Latest News Anytime Anywhere with DevNews.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5 bg-gray-100 dark:bg-zinc-900 transition-all duration-1000`} >
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto ">
            {children}
          </div>
          <BackToTopButton />
        </Providers>
      </body>
    </html>
  )
}