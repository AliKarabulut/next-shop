import CategoryList from '@/components/header/category'

const HeaderContainer = () => {
  return (
    <div className="group/container z-50 w-full bg-white max-md:py-2.5">
      <div className="container mx-auto flex flex-col gap-4 md:pt-8">
        <CategoryList className="h-fit" />
      </div>
    </div>
  )
}

export default HeaderContainer
