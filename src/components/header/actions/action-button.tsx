import Link from 'next/link'

import cn from '@/utils/cn'

type ActionIconProps = {
  children: React.ReactNode
  quantity?: number
  price?: number
  className?: string
  dropDown?: { title: string; link: string }[]
}

const ActionButton = ({ children, quantity, price, className, dropDown }: ActionIconProps) => {
  return (
    <div className={cn('action-wrapper group', className)}>
      {children}
      {quantity && <div className="action-quantity">{quantity < 9 ? quantity : '+9'}</div>}
      {price && <div className="action-price">${price}</div>}
      {dropDown && (
        <div className="action-dropdown group-hover:block">
          {dropDown.map((item, index) => (
            <Link href={item.link} key={index} className="action-dropdown-item">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default ActionButton
