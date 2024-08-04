import { Inter } from 'next/font/google'
import { Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const syne = Syne({ subsets: ['latin'] })

export const metadata = {
  title: 'Mahavir Patel | Full-Stack Developer & UI/UX Designer',
  description: 'Mahavir Patel is a Full-Stack Developer, IJI/UX Designer, and GDSC UVPCE Web Domain Lead, currently pursuing a B.Tech in Computer Engineering at Ganpat University. Explore his portfolio for innovative digital solutions.',
  keywords: 'Mahavir patel, Mahavir, Full-Stack Developer, UI/UX Designer, Web Development, GDSC, Mehsana, India',
  author: 'Mahavir Patel',
  viewport: 'width=device-width, initial-scale=1',
  'og:title': 'Mahavir Patel | Full-Stack Developer & UI/UX Designer',
  'og:description': 'Mahavir Patel is a Full-Stack Developer, IJI/UX Designer, and GDSC UVPCE Web Domain Lead, currently pursuing a B.Tech in Computer Engineering at Ganpat University. Explore his portfolio for innovative digital solutions.',
  'og:type': 'website',
  'og:url': 'https://mhvr.framer.website/',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${syne.className}`} >{children}</body>
    </html>
  )
}
