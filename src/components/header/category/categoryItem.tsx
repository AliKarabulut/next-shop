import Link from "next/link";

type CategoryItemProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export const CategoryItem = ({ name, href, icon }: CategoryItemProps) => {
  return (
    <Link href={href} className="font-light text-sm py-1 px-4 flex items-center w-fit">
      <span className="shrink-0 mr-2.5">{icon}</span>
      <span>{name}</span>
    </Link>
  );
};
