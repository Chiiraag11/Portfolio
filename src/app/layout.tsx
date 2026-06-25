import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chirag Prasad',
  description: 'Portfolio of Chirag Prasad — Cybersecurity practisioner, competitive programmer, and full-stack developer from IIIT Bhopal.',
  keywords: ['Chirag Prasad', 'Software Engineer', 'IIIT Bhopal', 'Portfolio', 'React', 'Next.js'],
  openGraph: {
    title: 'Chirag Prasad',
    description: 'Portfolio of Chirag Prasad',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
