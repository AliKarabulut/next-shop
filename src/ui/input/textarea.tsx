'use client'
import { useState, useRef } from 'react'

type onChangeProps = {
  name: string
  data: string
}

type TextAreaProps = {
  label: string
  name: string
  onChange: (e: onChangeProps) => void
}

const TextArea = ({ label, name, onChange }: TextAreaProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [textAreaValue, setTextAreaValue] = useState<string>('')
  const textAreaRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value)
    onChange({ name: name, data: e.target.value })
  }

  return (
    <div className="relative flex items-center" ref={textAreaRef}>
      <label
        htmlFor={name}
        className={`absolute text-admin-grey-500 transition-all ${open || textAreaValue ? '-top-5 text-xs ' : 'top-2 pl-3 text-base'}`}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        onChange={handleChange}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={`w-full cursor-pointer rounded-xl px-3 py-2 text-base capitalize shadow-admin-secondary-dark outline-none transition-all hover:shadow-md focus:cursor-text focus:shadow-md `}
        style={{ caretColor: '#697586' }}
        autoComplete="off"
      />
    </div>
  )
}

export default TextArea
