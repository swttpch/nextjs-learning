'use client'

import React from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react'

const navItem = [
  {
    name: 'Register',
    href: '/register'
  },
  {
    name: 'Login',
    href: '/login'
  },
  {
    name: 'Forgot Password',
    href: '/forgot-password'
  }
]
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState('')
  const pathname = usePathname()

  return (
    <>
      <div>
        <div>
          <input
            placeholder="Search"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {navItem.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              href={item.href}
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </>
  )
}
