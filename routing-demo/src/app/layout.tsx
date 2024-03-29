import { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: {
    default: 'Next.js learning',
    template: '%s | Next.js learning'
  },
  description: 'Generated by Next.js'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '1rem'
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer>
          <p
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '1rem'
            }}
          >
            Footer
          </p>
        </footer>
      </body>
    </html>
  )
}
