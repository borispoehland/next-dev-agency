import '../globals.scss'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Dev Agency',
  description:
    'Cleaning your code, detecting and fixing inefficiencies, schooling your workers remotely and upgrading to Next.js 13.',
  openGraph: {
    title: 'Next Dev Agency',
    description:
      'Cleaning your code, detecting and fixing inefficiencies, schooling your workers remotely and upgrading to Next.js 13.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
