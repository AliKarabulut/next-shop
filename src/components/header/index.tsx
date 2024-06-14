import HeaderContainer from '@/components/header/container'
import HeaderTopMenu from '@/components/header/top-menu'

const Header = () => {
  return (
    <header className="site-header">
      <HeaderTopMenu />
      <HeaderContainer />
    </header>
  )
}

export default Header
