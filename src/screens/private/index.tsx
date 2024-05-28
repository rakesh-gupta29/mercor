import { PrimaryAnchor } from 'atoms/anchors'
import { useAuth } from 'context/auth'
import React from 'react'

export default function Private() {
  return (
    <div className="py-20 text-center">
      <span className="text-2xl text-white">Private page</span>
      <div className="flex justify-center pt-14">
        <PrimaryAnchor href="/" text="Home page" size="base" />
      </div>
    </div>
  )
}
