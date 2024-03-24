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
    <button className={cn('action-wrapper actionIcon group', className)}>
      {children}
      {quantity && <div className="action-quantity">{quantity < 9 ? quantity : '+9'}</div>}
      {price && <div className="action-price">${price}</div>}
      {dropDown && (
        <div className="action-dropdown dropdown-border group-hover:block">
          {dropDown.map((item, index) => (
            <Link href={item.link} key={index} className="action-dropdown-item">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </button>
  )
}

export default ActionButton
