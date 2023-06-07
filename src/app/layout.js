import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Link href="/cadastro">Cadastro de produto</Link>
      </body>
    </html>
  )
}
