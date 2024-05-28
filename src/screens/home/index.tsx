import React from 'react'
import AuthIndicator from 'atoms/authIndicator'
import { PrimaryAnchor } from 'atoms/anchors'

export default function PageHome() {
  return (
    <div>
      <h4 className="text-white text-center px-6 pt-10">
        Welcome from home screen
      </h4>
      <div className="text-center py-6">
        <AuthIndicator />
      </div>
      <div className="flex justify-center pt-14">
        <PrimaryAnchor href="/private" text="Private page" size="base" />
      </div>
    </div>
  )
}
