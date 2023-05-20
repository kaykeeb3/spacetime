import { Copyright } from "@/components/Copyright"
import { Hero } from "@/components/Hero"
import { Profile } from '@/components/Profile'
import { SignIn } from "@/components/Signin"

import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto
} from 'next/font/google'
import { cookies } from "next/headers"
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ 
  subsets: ['latin'], 
  weight: '700', 
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        
        <main className="grid grid-cols-2 min-h-screen">
      <div className="relative bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10 pr-2">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />
        
        {isAuthenticated ? <Profile /> : <SignIn />}

        <Hero />

       <Copyright />
      </div>

      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
      {children}
      </div>
    </main>
      </body>
    </html>
  )
}
