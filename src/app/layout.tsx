import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chirag Prasad — Software Engineer',
  description:
    'Portfolio of Chirag Prasad — software engineer building backend systems, security tooling, and AI-integrated products. Final-year IT student at IIIT Bhopal.',
  keywords: ['Chirag Prasad', 'Software Engineer', 'IIIT Bhopal', 'Portfolio', 'Backend', 'Security'],
  openGraph: {
    title: 'Chirag Prasad — Software Engineer',
    description: 'Backend systems, security tooling, and AI-integrated products.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
