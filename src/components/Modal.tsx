'use client'
import React, { MouseEventHandler } from 'react'
import CustomButton from './UI/CustomButton'
import { useError, useModal, useSetModal } from '@/providers'

type Props = {}

const Modal = (props: Props) => {
  const modal = useModal()
  const setModal = useSetModal()
  const error = useError()
  if (!modal) {
    return
  }
  const closeHandler = () => {
    setModal(false)
  }
  return (
    <div
      onClick={closeHandler}
      className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-10 flex justify-center items-center"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white w-[500px] h-[200px] rounded-md flex flex-col overflow-clip"
      >
        <div className="bg-fuchsia-900 text-white p-4">
          <h2 className="font-bold text-lg tracking-wide">{error?.name}</h2>
        </div>

        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            {error?.description.map((msg, ind) => (
              <p key={ind}>{msg}</p>
            ))}
          </div>
          <div>
            <CustomButton
              onClick={closeHandler}
              type="button"
            >
              Okay
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
