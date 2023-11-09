"use client";
import { useRef, useState } from "react";
import { BsDot } from "react-icons/bs";
import ChevronDownIcon from "@/icons/admin/down";
import ChevronUpIcon from "@/icons/admin/up";
import Link from "next/link";

type IconButtonProps = {
  children: React.ReactNode;
  text: string;
  subMenuItems?: React.ReactNode[];
};

const IconButton: React.FC<IconButtonProps> = ({ children, text, subMenuItems }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {subMenuItems ? (
        <>
          <div
            className={`flex gap-4 px-6 py-3 mb-2 group select-none text-sm transition-all rounded-lg hover:bg-admin-secondary-light cursor-pointer items-center ${
              isActive && "text-admin-secondary-main bg-admin-secondary-light"
            }`}
            onClick={() => setIsActive(!isActive)}
          >
            {children}
            <span className={` group-hover:text-admin-secondary-main ${isActive ? "font-medium" : "font-normal"}`}>{text}</span>
            {isActive ? <ChevronUpIcon className="ml-auto" /> : <ChevronDownIcon className="ml-auto" />}
          </div>

          <div className="flex h-fit gap-3 select-none text-sm">
            <div className="w-px h-auto ml-8 bg-admin-primary-light" />
            <div
              style={{ maxHeight: isActive ? contentRef?.current?.scrollHeight + "px" : 0 }}
              ref={contentRef}
              className="duration-300 overflow-hidden flex flex-col "
            >
              {subMenuItems.map((subMenuItem, subIndex) => (
                <Link href="/admin/dashboard" key={subIndex} className="flex gap-2 items-center cursor-pointer py-3 rounded-lg group">
                  <BsDot /> <span className="group-hover:text-admin-secondary-main">{subMenuItem}</span>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Link
          href="/admin/dashboard"
          className={`flex gap-4 px-6 py-3 mb-2 group select-none text-sm transition-all rounded-lg hover:bg-admin-secondary-light cursor-pointer items-center ${
            isActive && "text-admin-secondary-main bg-admin-secondary-light"
          }`}
          onClick={() => setIsActive(!isActive)}
        >
          {children}
          <span className={` group-hover:text-admin-secondary-main ${isActive ? "font-medium" : "font-normal"}`}>{text}</span>
        </Link>
      )}
    </>
  );
};

export default IconButton;
