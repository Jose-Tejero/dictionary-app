import type { Metadata } from 'next'
import '@/app/globals.css'
import { montserrat } from './ui/fonts'
import { ReduxProvider } from './StoreProvider'

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
      <body className={`${montserrat.className} antialiased font-sans`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}