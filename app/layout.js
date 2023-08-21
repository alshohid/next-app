 
import './globals.css'
import TopNav from '@/Components/TopNav'

 

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My next Second App',
  description: 'This application is created by me ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav  />
        {children}
        </body>
    </html>
  )
}
