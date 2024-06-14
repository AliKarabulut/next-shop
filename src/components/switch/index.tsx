'use client'
import { Switch } from '@headlessui/react'
import { useState } from 'react'

import cn from '@/utils/cn'

type SwitchProps = {
  name?: string
  onChange: (e: boolean) => void
  falseIcon?: React.ReactNode
  trueIcon?: React.ReactNode
  initialValue?: boolean
  disabled?: boolean
}

const SwitchComponent = ({ name, onChange, falseIcon, trueIcon, initialValue, disabled }: SwitchProps) => {
  const [enabled, setEnabled] = useState<boolean>(initialValue ?? false)

  const changeHandler = (e: boolean) => {
    setEnabled(e)
    onChange(e)
  }

  return (
    <div className="switch-wrapper">
      <Switch
        checked={enabled}
        onChange={(e: boolean) => {
          changeHandler(e)
        }}
        disabled={disabled}
        className={cn('switch', {
          'switch-enabled': enabled,
          'switch-disabled': !enabled,
        })}>
        <span className="sr-only">{name}</span>

        <span
          aria-hidden="true"
          className={cn('switch-button', {
            enabled: enabled,
            disabled: !enabled,
          })}>
          {falseIcon && trueIcon && enabled ? trueIcon : falseIcon}
        </span>
      </Switch>
    </div>
  )
}
export default SwitchComponent
