import { forwardRef } from 'react'

import cn from '@/utils/cn'

type CheckboxProps = {
  name: string
  label: string
  srOnly?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ name, label, srOnly, onChange, checked, error, ...props }, ref) => {
  return (
    <div>
      <div className="checkbox-wrapper">
        <input id={name} name={name} type="checkbox" ref={ref} checked={checked} onChange={onChange} {...props} />
        <label htmlFor={name} className={cn('checkbox-label', { 'sr-only': srOnly })}>
          {label}
        </label>
      </div>
      {error && (
        <div className="input-error" id={`${name}-error`}>
          {error}
        </div>
      )}
    </div>
  )
})
Checkbox.displayName = 'Checkbox'
export default Checkbox
