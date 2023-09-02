'use client'
import React from 'react'
import CustomButton from './UI/CustomButton'
import { useDeleteMember } from '@/hooks'

type Props = {
  userName: string
  age: number
  id: number
}

const Member = (props: Props) => {
  const { userName, age, id} = props
  const deleteMember = useDeleteMember()
  return (
    <li className="border rounded-md py-1 px-2 flex justify-between items-center">
      <p>{`${userName} (${age} years old)`}</p>
      <CustomButton
        className="text-sm p-1 bg-rose-700"
        type="button"
        onClick={() => deleteMember(id)}
      >
        Delete
      </CustomButton>
    </li>
  )
}

export default Member
