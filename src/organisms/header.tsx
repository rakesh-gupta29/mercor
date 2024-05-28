import React from 'react'
import { useAuth } from 'context/auth'

export default function Header() {
  return (
    <header>
      <nav className="bg-black h-20 text-center grid place-content-center text-white">
        welcome from header
      </nav>
    </header>
  )
}
