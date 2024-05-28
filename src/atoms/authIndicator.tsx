import { useAuth } from 'context/auth'
import React from 'react'

export default function AuthIndicator() {
  const { loading, error, user } = useAuth()

  if (user) {
    return (
      <span className="text-lg font-normal text-white">
        Logged in as {user.email}
      </span>
    )
  }
  if (loading)
    return <span className="text-lg font-normal text-white">Loading...</span>
  if (error)
    return (
      <span className="text-lg font-normal text-white">
        Failed to load the auth state...
      </span>
    )
  return (
    <span className="text-lg font-normal text-white">
      User is not logged in
    </span>
  )
}
