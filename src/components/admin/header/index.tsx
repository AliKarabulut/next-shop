'use client'
import { useDispatch } from 'react-redux'
import { narrowedAction } from '@/store/admin/isNarrowed'
import MenuIcon from '@/icons/admin/menu'
import SettingsIcon from '@/icons/admin/settings'
import IconButton from '@/ui/icon-button'

const Header = () => {
  const dispatch = useDispatch()

  const toggleExpanded = () => {
    dispatch(narrowedAction.toggle())
    dispatch(narrowedAction.click())
  }

  return (
    <header className="flex h-20 items-center justify-between gap-4 bg-white px-6 py-4">
      <div className="flex w-full items-center sm:w-fit ">
        <h1 className="w-48">Admin</h1>
        <IconButton onClick={toggleExpanded} className="max-sm:hidden">
          <MenuIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(narrowedAction.mobileToggle())} className="ml-auto block sm:hidden">
          <MenuIcon />
        </IconButton>
      </div>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </header>
  )
}

export default Header
