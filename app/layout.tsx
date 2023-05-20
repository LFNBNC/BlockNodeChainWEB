import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
        <h1 className="fixed left-0 top-0 shadow hover:shadow-lg flex w-full justify-center bg-violet-900/30">
          Block Node Chain Under Development &#169;
         </h1>
        </nav>
        
        {children}</body>
    </html>
  )
}
