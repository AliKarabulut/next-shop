import { forwardRef } from 'react'

type CheckboxProps = {
  name: string
  label: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ name, label, onChange, checked, error, ...props }, ref) => {
  return (
    <div>
      <label className="checkbox-label">
        <input id={name} name={name} type="checkbox" ref={ref} checked={checked} onChange={onChange} {...props} />
        <div className="checkmark"></div>
        {label}
      </label>
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
