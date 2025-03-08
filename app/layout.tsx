import type { Metadata } from 'next'
import './globals.css'
import { montserrat } from './ui/fonts'

export const metadata: Metadata = {
  title: 'Dictionary App',
  description: 'A simple dictionary application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}