import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfólio Vinícius',
  description: 'Site para ser meu portifólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
