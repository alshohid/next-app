'use client'
import './globals.css'
import TopNav from '@/Components/TopNav'


import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

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
         <ProgressBar
          height="4px"
          color="red"
          options={{ showSpinner: false }}
          shallowRouting
        />
        </body>
    </html>
  )
}
