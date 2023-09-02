'use client'
import React, { FormEvent, FormEventHandler, useState } from 'react'
import Card from './UI/Card'
import CustomButton from './UI/CustomButton'
import CustomInput from './UI/CustomInput'
import { useAddMember, useInputValidator } from '@/hooks'

type Props = {}

const MemberForm = (props: Props) => {
  const [username, setUsername] = useState<string>('')
  const [age, setAge] = useState<number | ''>('')
  const addMember = useAddMember()
  const inputValidator = useInputValidator()

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (inputValidator(username, age)) {
      addMember(username, age as number)
      setUsername('')
      setAge('')
    }
  }

  return (
    <Card>
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4"
      >
        <CustomInput
          label="Username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <CustomInput
          label="Age (Years)"
          type="number"
          value={age.toString()}
          onChange={(event) => setAge(Number(event.target.value))}
        />
        <div>
          <CustomButton type="submit">Add User</CustomButton>
        </div>
      </form>
    </Card>
  )
}

export default MemberForm
