
import { Inter } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/global.css'

import { Inter } from 'next/font/google'

const mainFont = Inter({
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">{children}</body>
      <div className='overlay'></div>
    </html>
  )
}
