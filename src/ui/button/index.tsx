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
            className={`overflow-hidden w-fit flex py-3 mb-2 group select-none text-sm transition-all rounded-lg hover:bg-admin-secondary-light cursor-pointer items-center ${
              isActive ? "text-admin-secondary-main bg-admin-secondary-light" : ""
            } ${!isNarrowed ? "gap-4 px-6" : "px-3"}`}
            onClick={() => setIsActive(!isActive)}
          >
            {children}
            <span
              className={`group-hover:text-admin-secondary-main duration-150 ${isActive ? "font-medium" : "font-normal"} ${
                isNarrowed ? "opacity-0 -translate-x-2 w-0 whitespace-nowrap" : ""
              }`}
            >
              {text}
            </span>
            {!isNarrowed && (isActive ? <ChevronUpIcon className="ml-auto" /> : <ChevronDownIcon className="ml-auto" />)}
          </div>
          <div className="flex h-fit gap-3 select-none text-sm overflow-hidden ">
            <div className={`w-px h-auto mb-2 bg-admin-primary-light  ${isNarrowed ? "ml-2" : "ml-8"}`} />
            <div
              style={{ maxHeight: isActive ? contentRef?.current?.scrollHeight + "px" : 0 }}
              ref={contentRef}
              className={`duration-300 flex flex-col ${isNarrowed ? " -translate-x-2 w-fit whitespace-nowrap" : ""}`}
            >
              {subMenuItems.map((subMenuItem, subIndex) => (
                <Link
                  href={`/admin/dashboard/${subMenuItem.href}`}
                  key={subIndex}
                  className={`flex gap-2 items-center cursor-pointer py-3 rounded-lg group ${
                    subMenuItem.href === segment && "text-admin-secondary-main"
                  }`}
                >
                  <DotIcon className={`${subMenuItem.href === segment ? "scale-150" : ""} ${isNarrowed ? "hidden" : ""}`} />
                  <span
                    className={`group-hover:text-admin-secondary-main transition-[width] duration-300 ${
                      isNarrowed ? "w-[1ch] ml-1 tracking-widest overflow-hidden" : "w-auto"
                    }`}
                  >
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
          className={`flex w-fit py-3 mb-2 group select-none text-sm transition-all rounded-lg hover:bg-admin-secondary-light cursor-pointer items-center ${
            isActive ? "text-admin-secondary-main bg-admin-secondary-light" : ""
          } ${!isNarrowed ? "gap-4 px-6" : "px-3"}
          `}
        >
          {children}
          <span
            className={` group-hover:text-admin-secondary-main duration-150 ${isActive ? "font-medium" : "font-normal"} ${
              isNarrowed ? "opacity-0 -translate-x-2 w-0 whitespace-nowrap" : ""
            }`}
          >
            {text}
          </span>
        </Link>
      )}
    </>
  );
};

export default Button;
