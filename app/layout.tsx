import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Head from './head'
import Header from './Header'

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
      <body className={`${inter.className} p-5`}>
        <Header />
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
