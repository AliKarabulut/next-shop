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
    <div className={`flex gap-10 ${className}`}>
      <ActionIcon quantity={2}>
        <GitCompareIcon size={24} />
      </ActionIcon>
      <ActionIcon>
        <HeartIcon size={24} />
      </ActionIcon>
      <ActionIcon dropDown={DummyDropDown}>
        <UserIcon size={24} />
      </ActionIcon>
      <ActionIcon quantity={4} price={110.0}>
        <ShoppingBagIcon size={24} />
      </ActionIcon>
    </div>
  )
}

export default ActionButtons
