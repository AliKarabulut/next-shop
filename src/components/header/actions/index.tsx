import UserIcon from '@/icons/e-commerce/user'
import ActionIcon from './actionButton'
import HeartIcon from '@/icons/e-commerce/heart'
import ShoppingBagIcon from '@/icons/e-commerce/shopping-bag'
import GitCompareIcon from '@/icons/e-commerce/git-compare'

const DummyDropDown = [
  { title: 'Login', link: '/' },
  { title: 'Register', link: '/' },
]

type DropDownType = {
  className?: string
}

const ActionButtons = ({ className }: DropDownType) => {
  return (
    <div className={`flex gap-7 ${className}`}>
      <ActionIcon quantity={2}>
        <GitCompareIcon size={26} />
      </ActionIcon>
      <ActionIcon>
        <HeartIcon size={26} />
      </ActionIcon>
      <ActionIcon dropDown={DummyDropDown}>
        <UserIcon size={26} />
      </ActionIcon>
      <ActionIcon quantity={4} price={110.0}>
        <ShoppingBagIcon size={26} />
      </ActionIcon>
    </div>
  )
}

export default ActionButtons
