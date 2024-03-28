'use client'
import { forwardRef, useState } from 'react'

import EyeIcon from '@/icons/eye'
import cn from '@/utils/cn'

type InputProps = {
  label: string
  name: string
  id?: string
  type?: 'text' | 'email' | 'password' | 'number'
  error?: string
  autoComplete?: string
  required?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, id, type = 'text', autoComplete, required = true, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }
    return (
      <div>
        <label htmlFor={name} className="text-gray-900 dark:text-darkModeNeutral-100 block text-sm font-medium leading-6">
          {label}
        </label>
        <div className={cn('mt-2', { relative: type === 'password' })}>
          <input
            id={id ?? name}
            ref={ref}
            name={name}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            autoComplete={autoComplete ?? name}
            required={required}
            {...props}
            className={cn(
              'text-gray-900 ring-gray-300 placeholder:text-gray-400 dark:bg-darkModeNeutral-200 dark:text-darkModeNeutral-50 dark:focus:ring-darkModeNeutral-50 block w-full rounded-md border-0 px-4 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
              {
                'pr-9': type === 'password',
              },
            )}
          />
          {type === 'password' && (
            <div
              className="absolute right-3 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-[#999999]"
              onClick={togglePasswordVisibility}>
              {showPassword ? <EyeIcon /> : <EyeIcon />}
            </div>
          )}
        </div>
        {error && (
          <div className="text-red-600 mt-2 text-sm" id={`${name}-error`}>
            {error}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
