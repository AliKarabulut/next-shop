import Link from 'next/link'

import ButtonLoadingAnimation from '@/components/button-loading-animation'
import cn from '@/utils/cn'

type ButtonProps = {
  href?: string
  label: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'ghost'
  onClick?: () => void
  className?: string
  children?: React.ReactNode
  disabled?: boolean
}

const Button = ({ href, label, type = 'submit', onClick, className, children, disabled, variant = 'primary', ...props }: ButtonProps) => {
  const buttonClass = cn(
    'button-base',
    {
      'button-disabled': disabled,
      'button-primary': variant === 'primary',
      'button-ghost': variant === 'ghost',
    },
    className,
  )

  return href ? (
    <Link href={href} className={buttonClass} {...props}>
      {children}
      {label}
    </Link>
  ) : (
    <button type={type} onClick={onClick} className={buttonClass} disabled={disabled} {...props}>
      {children}
      {label}
      {disabled && <ButtonLoadingAnimation />}
    </button>
  )
}

export default Button
