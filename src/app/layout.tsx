import type { Metadata } from 'next'
import { Lato, Merriweather } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
})
const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Andrés Fuenzalida',
  description: 'Full Stack Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${lato.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>"
        />
      </head>
      <body>
        <Providers>
          <div className="container mx-auto py-6">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
