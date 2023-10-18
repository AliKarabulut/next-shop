"use client";
import { useState, useRef, useEffect } from "react";
import { BsListTask } from "react-icons/bs";
import { CategoryList } from "./categoryList";

const DummyMenuContent = [
  { name: "Value of the Day", isBold: true },
  { name: "Top 100 Offers", isBold: true },
  { name: "New Arrivals", isBold: true },
  { name: "Computers & Accessories", isBold: false },
  { name: "Gadgets", isBold: false },
  { name: "Cameras", isBold: false },
  { name: "Headphones", isBold: false },
  { name: "Smartwatches", isBold: false },
  { name: "Game Consoles", isBold: false },
];

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleAccordion}
      ref={accordionRef}
      className={`flex cursor-pointer relative w-64 items-center gap-2 px-5 py-2 transition-all bg-yellow  rounded-[10px] opacity-0 animate-opacitySlow ${
        isOpen ? "rounded-bl-none rounded-br-none" : ""
      }`}
    >
      <BsListTask size={24} />
      <div className="text-sm font-semibold">All Departments</div>
      <div
        className="overflow-hidden absolute  top-10 bg-white w-full left-0 duration-300"
        style={{ maxHeight: isOpen ? (contentRef.current?.scrollHeight ? contentRef.current.scrollHeight + "px" : "296px") : 0 }}
        ref={contentRef}
      >
        {DummyMenuContent.map((el, index) => (
          <CategoryList key={index} {...el} />
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
