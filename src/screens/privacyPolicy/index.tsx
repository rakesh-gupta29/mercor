import React, { useLayoutEffect } from 'react'
import { RenderMarkdown } from 'organisms'

const content = `## Welcome from privacy policy`

export default function PrivacyPolicy() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="blade-top-padding-lg blade-bottom-padding-lg mb-4 ">
        <h1 className="font-extrabold text-center text-green blade-top-padding-lg blade-top-margin-lg leading-relaxed md:block hidden">
          Privacy Policy
        </h1>
        <h3 className="font-bold text-center  px-5  sm:w-10/12 lg:w-full mx-auto blade-top-padding-lg blade-top-margin-lg leading-relaxed md:hidden block">
          Privacy Policy
        </h3>
      </div>
      <div className="markdown-wrapper md:w-11/12 sm:px-5 px-3 max-w-screen-lg mx-auto blade-bottom-padding-lg blade-bottom-margin-lg">
        <RenderMarkdown content={content} />
      </div>
    </>
  )
}
