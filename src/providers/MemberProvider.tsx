'use client'
import React, { useContext, useState } from 'react'
import { UserProps } from '@/types'
import { Dispatch, SetStateAction, createContext } from 'react'

const MemberValueContext = createContext<UserProps[]>([])
const MemberSetContext = createContext<Dispatch<SetStateAction<UserProps[]>>>(
  () => {}
)

const MemberValueProvider = (props: {
  children: React.ReactNode
  value: UserProps[]
}) => {
  const { children, value } = props
  return (
    <MemberValueContext.Provider value={value}>
      {children}
    </MemberValueContext.Provider>
  )
}

const MemberSetProvider = (props: {
  children: React.ReactNode
  value: Dispatch<SetStateAction<UserProps[]>>
}) => {
  const { children, value } = props
  return (
    <MemberSetContext.Provider value={value}>
      {children}
    </MemberSetContext.Provider>
  )
}

export const MemberProvider = (props: { children: React.ReactNode }) => {
  const [members, setMembers] = useState<UserProps[]>([])
  return (
    <MemberSetProvider value={setMembers}>
      <MemberValueProvider value={members}>
        {props.children}
      </MemberValueProvider>
    </MemberSetProvider>
  )
}

export const useMembers = () => useContext(MemberValueContext)
export const useSetMembers = () => useContext(MemberSetContext)
