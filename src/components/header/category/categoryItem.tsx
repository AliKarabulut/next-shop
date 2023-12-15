import Link from 'next/link'

type CategoryItemProps = {
  name: string
  href: string
  icon: React.ReactNode
}

export const CategoryItem = ({ name, href, icon }: CategoryItemProps) => {
  return (
    <Link href={href} className="flex w-fit items-center px-4 py-1 text-sm font-light">
      <span className="mr-2.5 shrink-0">{icon}</span>
      <span>{name}</span>
    </Link>
  )
}
