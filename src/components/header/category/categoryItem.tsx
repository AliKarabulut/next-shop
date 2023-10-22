import Link from "next/link";

type CategoryItemProps = {
  name: string;
  href: string;
};

export const CategoryItem = ({ name, href }: CategoryItemProps) => {
  return (
    <Link href={href} className="categoryItem font-normal text-sm py-1 px-4 flex items-center w-fit">
      {name}
    </Link>
  );
};
