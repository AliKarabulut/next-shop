"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ActionIconProps = {
  children: React.ReactNode;
  quantity?: number;
  price?: number;
  className?: string;
  dropDown?: { title: string; link: string }[];
};

const ActionIcon = ({ children, quantity, price, className, dropDown }: ActionIconProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={searchRef}
      onClick={(e) => setIsOpen(prev=> !prev)}
      className={`actionIcon group relative cursor-pointer duration-300 flex gap-2 items-center ${{ ...{ className } }}`}
    >
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
      {dropDown && isOpen && (
        <div
          className="border-t-2 border-t-yellow border rounded-b-lg
        text-blueDark  border-gray drop-shadow-lg w-fit bg-white 
          absolute top-8 -left-9 before:content-[''] before:absolute
          before:-top-2 before:left-1/2 before:-translate-x-1/2 
          before:border-x-[6px] before:border-x-transparent 
          before:border-b-[6px] before:border-b-yellow opacity-0 animate-opacityFast"
        >
          {dropDown.map((item, index) => (
            <Link href={item.link} key={index} className="block border-b border-yellow last:border-none px-4 py-2 hover:bg-grayLight">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionIcon;
