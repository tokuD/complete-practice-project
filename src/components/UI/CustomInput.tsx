import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

type Props = {
  label: string
  type: HTMLInputTypeAttribute
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const CustomInput = (props: Props) => {
  const { label, type, onChange, value } = props
  return (
    <div className="flex flex-col">
      <label className="font-bold text-sm">{label}</label>
      <input
        onChange={onChange}
        type={type}
        value={value}
        className="border rounded-md py-1 px-2"
      />
    </div>
  )
}

export default CustomInput
