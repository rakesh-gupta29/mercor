import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  PageHome,
  PageError404,
  PageAbout,
  PageContact,
  PagePrivacyPolicy,
  PagePrivate,
} from 'screens/index'
import { Header, Footer } from 'organisms'
import { AuthProtection } from './wrappers'

function ViewWithHeaderAndFooter() {
  return (
    <div className="bg-blue page-wrapper flex flex-col ">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default function routes() {
  return [
    {
      path: '/',
      element: <ViewWithHeaderAndFooter />,
      children: [
        {
          path: '/',

          element: <PageHome />,
        },
        {
          path: '/contact',
          element: <PageContact />,
        },
        {
          path: '/about',
          element: <PageAbout />,
        },
        {
          path: '/private',
          element: (
            <AuthProtection>
              <PagePrivate />
            </AuthProtection>
          ),
        },
        {
          path: '/privacy-policy',
          element: <PagePrivacyPolicy />,
        },
        {
          path: '*',
          element: <PageError404 />,
        },
      ],
    },
  ]
}
