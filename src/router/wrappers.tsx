import React, { ReactNode, useEffect, useLayoutEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from 'context/auth'

export function AuthProtection({ children }: { children: JSX.Element }) {
  const [isloading, setLoading] = useState(true)
  const { loading, error, user, login } = useAuth()
  const location = useLocation()

  // Make the fake login request when component mounts
  useLayoutEffect(() => {
    login('user', 'password').finally(() => {
      setLoading(false)
    })
  }, [])

  // works as caching for following routes.
  if (user) return children

  if (isloading) {
    return (
      <div className="py-20 text-center grid gap-1">
        <span className="text-2xl text-white">Loading...</span>
        <span className="text-lg text-white">
          Making an API call to check the auth state.
        </span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <span className="text-2xl text-white">Error:{error} </span>
      </div>
    )
  }

  return <Navigate to="/login" state={{ from: location }} replace />
}
