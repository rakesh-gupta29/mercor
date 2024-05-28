import React, { AnchorHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

const sizeMap = {
  small: 'text-sm',
  base: 'text-base',
  large: 'text-base md:text-lg',
  xl: 'text-base md:text-xl',
  xxl: 'text-xl xl:text-2xl',
  '3xl': 'text-xl md:text-2xl xl:text-3xl',
}

type AnchorBtnProps = {
  text: string
  size: keyof typeof sizeMap
  isDisabled?: boolean
  href: string
  onClick?: () => void
} & AnchorHTMLAttributes<HTMLAnchorElement>

export function PrimaryAnchor({
  text,
  size,
  isDisabled,
  href,
  ...rest
}: AnchorBtnProps): JSX.Element {
  const sizeClass: string = sizeMap[size]
  return (
    <Link
      {...rest}
      to={href}
      className={`${sizeClass} rounded-full px-4 py-2 font-normal focus-visible:outline-none outline-none focus-visible:bg-white focus-visible:text-black focus-visible:outline-white outline-offset-2 outline outline-2 outline-solid outline-transparent tracking-wide leading-snug whitespace-nowrap transition-all duration-150 ease-in-out bg-transparent text-white stroke-dark hover:stroke-white hover:text-dark hover:bg-white hover:border-transparent border border-white `}
      onClick={(e) => {
        if (isDisabled) {
          e.preventDefault()
          return
        }
        if (rest.onClick) {
          rest.onClick()
        }
      }}
    >
      {text}
    </Link>
  )
}
