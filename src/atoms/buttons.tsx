import React, { ButtonHTMLAttributes } from 'react'

const sizeMap = {
  small: 'text-sm',
  base: 'text-base',
  large: 'text-base md:text-lg',
  xl: 'text-base md:text-xl',
  xxl: 'text-xl xl:text-2xl',
  '3xl': 'text-xl md:text-2xl xl:text-3xl',
}

type MasterBtnProps<T extends 'submit' | 'button'> = {
  text: string
  size: keyof typeof sizeMap
  type: T
  isDisabled?: boolean
  onClick?: T extends 'submit' ? never : () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryBtn<T extends 'submit' | 'button'>({
  type,
  text,
  size,
  isDisabled,
  ...rest
}: MasterBtnProps<T>) {
  const sizeClass: string = sizeMap[size]
  return (
    <button
      disabled={isDisabled}
      {...rest}
      type={type === 'button' ? 'button' : 'submit'}
      className={`${sizeClass} rounded-full px-4 py-2 font-normal focus-visible:outline-none outline-none focus-visible:bg-white focus-visible:text-black focus-visible:outline-white outline-offset-2 outline outline-2 outline-solid outline-transparent tracking-wide leading-snug whitespace-nowrap transition-all duration-150 ease-in-out bg-transparent text-white stroke-dark hover:stroke-white hover:text-dark hover:bg-white hover:border-transparent border border-white `}
    >
      {text}
    </button>
  )
}
