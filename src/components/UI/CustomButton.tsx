import React, { MouseEventHandler } from 'react'

type Props = {
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  type: 'button' | 'submit' | 'reset' | undefined
  className?: string
}

const CustomButton = (props: Props) => {
  const { children, onClick, type, className } = props
  return (
    <button
      className={`py-2 px-4 rounded-md bg-fuchsia-900 text-white ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default CustomButton
