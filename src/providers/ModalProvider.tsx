'use client'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const ModalValueContext = createContext<boolean>(false)
const ModalSetContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {}
)

const ModalValueProvider = (props: {
  children: React.ReactNode
  value: boolean
}) => {
  const { children, value } = props
  return (
    <ModalValueContext.Provider value={value}>
      {children}
    </ModalValueContext.Provider>
  )
}

const ModalSetProvider = (props: {
  children: React.ReactNode
  value: Dispatch<SetStateAction<boolean>>
}) => {
  const { children, value } = props
  return (
    <ModalSetContext.Provider value={value}>
      {children}
    </ModalSetContext.Provider>
  )
}

export const ModalProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [modal, setModal] = useState(false)
  return (
    <ModalValueProvider value={modal}>
      <ModalSetProvider value={setModal}>{children}</ModalSetProvider>
    </ModalValueProvider>
  )
}

export const useModal = () => useContext(ModalValueContext)
export const useSetModal = () => useContext(ModalSetContext)
