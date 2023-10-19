"use client";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
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

type MiniCategoryType = {
  children?: React.ReactNode;
};

const MiniCategory = ({ children }: MiniCategoryType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden", !isMenuOpen);
  };

  return (
    <>
      <div id="mobile-menu-button" className="md:hidden">
        <div onClick={() => clickHandler()}>
          <RxHamburgerMenu size={24} />
        </div>
      </div>
      <div
        id="mobile-menu"
        className={` fixed left-0 top-0 z-50 h-full w-full bg-white p-8 duration-150 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-[48rem]"
        } `}
      >
        <div className="flex items-center justify-between pb-8">
          <RxHamburgerMenu size={24} onClick={() => clickHandler()} />
          {children}
        </div>
        <div>
          {DummyMenuContent.map((el, index) => (
            <CategoryList key={index} {...el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MiniCategory;
