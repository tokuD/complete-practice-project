'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

export type ErrorProps = {
  name: string
  description: string[]
} | null

const ErrorValueContext = createContext<ErrorProps>(null)
const ErrorSetContext = createContext<Dispatch<SetStateAction<ErrorProps>>>(
  () => {}
)

const ErrorValueProvider = (props: {
  children: ReactNode
  value: ErrorProps
}) => {
  const { children, value } = props
  return (
    <ErrorValueContext.Provider value={value}>
      {children}
    </ErrorValueContext.Provider>
  )
}

const ErrorSetProvider = (props: {
  children: ReactNode
  value: Dispatch<SetStateAction<ErrorProps>>
}) => {
  const { children, value } = props
  return (
    <ErrorSetContext.Provider value={value}>
      {children}
    </ErrorSetContext.Provider>
  )
}

export const ErrorProvider = (props: { children: ReactNode }) => {
  const [error, setError] = useState<ErrorProps>(null)
  return (
    <ErrorSetProvider value={setError}>
      <ErrorValueProvider value={error}>{props.children}</ErrorValueProvider>
    </ErrorSetProvider>
  )
}

export const useError = () => useContext(ErrorValueContext)
export const useSetError = () => useContext(ErrorSetContext)
