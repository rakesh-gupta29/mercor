import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { UIProvider } from 'context/ui'
import { AuthProvider } from 'context/auth'
import routes from './router'

const RenderRoutes = () => {
  const routeTree = useRoutes(routes())
  return routeTree
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RenderRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
