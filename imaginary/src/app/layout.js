
import { Inter } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/global.css'
import { mainFont } from '@/libs/font'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <body className="layout">{children}</body>
      <div className='overlay'></div>
    </html>
  )
}
