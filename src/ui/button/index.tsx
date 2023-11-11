"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ChevronDownIcon from "@/icons/admin/down";
import ChevronUpIcon from "@/icons/admin/up";
import Link from "next/link";

import DotIcon from "@/icons/admin/dot";

type ButtonProps = {
  children: React.ReactNode;
  text: string;
  subMenuItems?: { item: string; href: string }[];
  href?: string;
};

const Button: React.FC<ButtonProps> = ({ children, text, subMenuItems, href }) => {
  const segment = useSelectedLayoutSegment();
  const [isActive, setIsActive] = useState<boolean>(segment === href || subMenuItems?.some((item) => item.href === segment) ? true : false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isNarrowed = useSelector((state: any) => state.isNarrowed.isNarrowed);

  useEffect(() => {
    setIsActive(segment === href || subMenuItems?.some((item) => item.href === segment) ? true : false);
  }, [segment]);

  return (
    <>
      {subMenuItems ? (
        <>
          <div
            className={`flex py-3 gap-4 overflow-hidden mb-2 group select-none text-sm duration-300 rounded-lg hover:bg-admin-secondary-light cursor-pointer items-center ${
              isActive ? "text-admin-secondary-main bg-admin-secondary-light" : ""
            } ${!isNarrowed ? "px-6 w-56" : "px-3 w-11"}`}
            onClick={() => setIsActive(!isActive)}
          >
            {children}
            <span
              className={`group-hover:text-admin-secondary-main duration-300 ease-linear whitespace-nowrap ${
                isActive ? "font-medium" : "font-normal"
              } ${isNarrowed ? "opacity-0 overflow-hidden w-0" : "w-32"}`}
            >
              {text}
            </span>
            {!isNarrowed && (isActive ? <ChevronUpIcon className="ml-auto " /> : <ChevronDownIcon className="ml-auto" />)}
          </div>
          <div className={`flex select-none text-sm overflow-hidden duration-300 ${!isNarrowed ? "w-56 gap-3 " : "w-11 "}`}>
            <div className={`w-px h-auto mb-2 bg-admin-primary-light duration-300 flex-shrink-0 ${isNarrowed ? "ml-2" : "ml-8"}`} />
            <div
              style={{ maxHeight: isActive ? contentRef?.current?.scrollHeight + "px" : 0 }}
              ref={contentRef}
              className={`flex flex-col duration-300 w-full`}
            >
              {subMenuItems.map((subMenuItem, subIndex) => (
                <Link
                  href={`/admin/dashboard/${subMenuItem.href}`}
                  key={subIndex}
                  className={`flex items-center cursor-pointer py-3 rounded-lg group whitespace-nowrap group${
                    subMenuItem.href === segment && "text-admin-secondary-main"
                  }`}
                >
                 {!isNarrowed ?  <DotIcon className={`${subMenuItem.href === segment ? "scale-150" : ""} duration-300 flex-shrink-0`} /> : <span className="px-2 duration-300 group-hover:text-admin-secondary-main">{subMenuItem.item.charAt(0)}</span>}
                  <span className={`group-hover:text-admin-secondary-main duration-300 ${isNarrowed ? "opacity-0 overflow-hidden w-0" : "w-40 pl-3"}`}>
                    {subMenuItem.item}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={`/admin/dashboard/${href}`}
          className={`flex py-3 gap-4 overflow-hidden mb-2 group select-none text-sm duration-300 rounded-lg hover:bg-admin-secondary-light cursor-pointer items-center ${
            isActive ? "text-admin-secondary-main bg-admin-secondary-light" : ""
          } ${!isNarrowed ? "px-6 w-56" : "px-3 w-11"}`}
        >
          {children}
          <span
            className={`group-hover:text-admin-secondary-main duration-300 ease-linear whitespace-nowrap ${
              isActive ? "font-medium" : "font-normal"
            } ${isNarrowed ? "opacity-0 overflow-hidden w-0" : "w-32"}`}
          >
            {text}
          </span>
        </Link>
      )}
    </>
  );
};

export default Button;
