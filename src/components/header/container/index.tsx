import CategoryList from '@/components/header/category'
import HeaderActionGroup from '@/components/header/actions'

const HeaderContainer = () => {
  return (
    <div className="group/container z-50 w-full bg-white max-md:py-2.5">
      <div className="header-container">
        <div className="header-sub-wrapper">
          <div className="header-brand">E commerce</div>
          <HeaderActionGroup />
        </div>
        <CategoryList />
      </div>
    </div>
  )
}

export default HeaderContainer
