import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ubuntuMono = Ubuntu_Mono({ subsets: ['latin'], weight: '400', variable: '--font-ubuntu' })

export const metadata: Metadata = {
  title: 'AskSQL',
  description: 'AskSQL - pergunte SQL para a IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className='bg-bluebarry'>
        {children}
      </body>
    </html>
  )
}
