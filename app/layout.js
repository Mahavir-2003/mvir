import { Inter } from 'next/font/google'
import { Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

export const metadata = {
  title: 'Mahavir Patel | GDSC UVPCE Web Domain Lead | Full-Stack Developer & UI/UX Designer',
  description: 'Mahavir Patel is a Full-Stack Developer, UI/UX Designer, and GDSC UVPCE Web Domain Lead from Mehsana, Gujrat, India. He is currently pursuing a B.Tech in Computer Engineering at Ganpat University. Explore his portfolio for innovative digital solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${syne.className}`} >{children}</body>
    </html>
  )
}
