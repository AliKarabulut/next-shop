import { HiOutlineChevronRight } from "react-icons/hi";

type CategoryListProps = {
  name: string;
  isBold: boolean;
};

export const CategoryList = ({ name, isBold = false }: CategoryListProps) => {
  return (
    <p
      className={`mx-4 px-1 py-1.5 border-b flex justify-between border-gray text-sm last:border-none duration-200 hover:bg-grayLighter ${
        isBold ? "font-semibold" : "hover:font-semibold"
      }`}
    >
      {name}
      <HiOutlineChevronRight className="stroke-1" />
    </p>
  );
};
