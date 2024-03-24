import ActionButton from '@/components/header/actions/action-button'
import UserIcon from '@/icons/user'
import HeartIcon from '@/icons/heart'
import ShoppingBagIcon from '@/icons/shopping-bag'
import cn from '@/utils/cn'

const DummyDropDown = [
  { title: 'Login', link: '/login' },
  { title: 'Register', link: '/register' },
]

type DropDownType = {
  className?: string
}

const HeaderActionGroup = ({ className }: DropDownType) => {
  return (
    <div className={cn('action-container', className)}>
      <ActionButton dropDown={DummyDropDown}>
        <UserIcon size={26} />
      </ActionButton>
      <ActionButton>
        <HeartIcon size={26} />
      </ActionButton>
      <ActionButton quantity={4}>
        <ShoppingBagIcon size={26} />
      </ActionButton>
    </div>
  )
}

export default HeaderActionGroup
