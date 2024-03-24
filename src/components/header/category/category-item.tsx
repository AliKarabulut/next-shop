import Link from 'next/link'

type CategoryItemProps = {
  name: string
  href: string
  icon: React.ReactNode
}

const CategoryItem = ({ name, href, icon }: CategoryItemProps) => {
  return (
    <Link href={href} className="category-item">
      {icon}
      <span>{name}</span>
    </Link>
  )
}

export default CategoryItem
