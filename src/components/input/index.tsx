'use client'
import { forwardRef, useState } from 'react'

import EyeIcon from '@/icons/eye'
import cn from '@/utils/cn'

type InputProps = {
  label: string
  name: string
  id?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
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
      <div className="relative">
        <label htmlFor={name} className="input-label">
          {label}
        </label>
        <div className={cn('input-wrapper', { relative: type === 'password' })}>
          <input
            id={id ?? name}
            ref={ref}
            name={name}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            autoComplete={autoComplete ?? name}
            required={required}
            {...props}
            className={cn({
              'if-password': type === 'password',
            })}
          />
          {type === 'password' && (
            <button type="button" className="form-password-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeIcon /> : <EyeIcon />}
            </button>
          )}
        </div>
        {error && (
          <div className="input-error" id={`${name}-error`}>
            {error}
          </div>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
