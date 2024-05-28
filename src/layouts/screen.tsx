import React, { ReactNode } from 'react'

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return <main>{children}</main>
}
