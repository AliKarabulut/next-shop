import Link from "next/link";

type ActionIconProps = {
  children: React.ReactNode;
  quantity?: number;
  price?: number;
  className?: string;
  dropDown?: { title: string; link: string }[];
};

const ActionIcon = ({ children, quantity, price, className, dropDown }: ActionIconProps) => {
  return (
    <div className={`actionIcon group relative cursor-pointer duration-300 flex gap-2 items-center w-fit ${className}`}>
      {children}
      {quantity && (
        <div
          id="quantity"
          className="rounded-full w-5 h-5 bg-yellow absolute left-3.5 -bottom-2.5 text-sm flex items-center justify-center group-hover:opacity-50 duration-300 font-medium"
        >
          {quantity <= 9 ? quantity : "+9"}
        </div>
      )}
      {price && <div className="text-sm font-bold">${price}</div>}
      {dropDown && (
        <div
          className="hidden group-hover:block border-t-2 border-t-yellow rounded-b-lg
 text-lightDark drop-shadow-lg w-fit bg-white 
   absolute top-8 left-1/2 transform -translate-x-1/2 
   before:content-[''] before:absolute
   before:-top-2 before:left-1/2 before:-translate-x-1/2 
   before:border-x-[6px] before:border-x-transparent 
   before:border-b-[6px] before:border-b-yellow opacity-0 animate-opacityFast
   after:content-[''] after:absolute after:-top-4 after:w-full after:h-4 
   after:left-1/2 after:-translate-x-1/2 z-50"
        >
          {dropDown.map((item, index) => (
            <Link href={item.link} key={index} className="text-sm block last:rounded-b-lg px-4 py-2 hover:bg-grayLight">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionIcon;
