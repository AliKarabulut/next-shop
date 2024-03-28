import { forwardRef } from 'react'

import cn from '@/utils/cn'

type CheckboxProps = {
  name: string
  label: string
  srOnly?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  withLine?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ name, label, srOnly, onChange, checked, withLine, ...props }, ref) => {
  return (
    <>
      <div
        className={cn('flex items-center', {
          'relative z-10': withLine,
        })}>
        <input
          id={name}
          name={name}
          type="checkbox"
          ref={ref}
          checked={checked}
          onChange={onChange}
          {...props}
          className="border-gray-300 dark:border-darkModeNeutral-50 dark:bg-darkModeNeutral-100 dark:text-darkModeNeutral-50 size-4  rounded text-indigo-600 focus:ring-indigo-600 dark:ring-0 dark:focus:ring-neutral-300"
        />
        <label
          htmlFor={name}
          className={`text-gray-900 dark:text-darkModeNeutral-50 ml-3 block text-sm leading-6 ${srOnly ? 'sr-only' : ''}`}>
          {label}
        </label>
      </div>
      {withLine && checked && (
        <div className="bg-gray-200 dark:bg-darkModeNeutral-100 pointer-events-none absolute inset-x-0 top-1/2 h-px" />
      )}
    </>
  )
})
Checkbox.displayName = 'Checkbox'
export default Checkbox
