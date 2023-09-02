import React from 'react'

type Props = {
  children: React.ReactNode
}

const Card = (props: Props) => {
  const { children } = props
  return <div className="bg-white p-4 rounded-md">{children}</div>
}

export default Card
