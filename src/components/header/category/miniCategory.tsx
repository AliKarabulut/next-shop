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

const MiniCategory = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenu = useRef(null);

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

  return (
    <>
      <div id="mobile-menu-button" className="md:hidden">
        <div onClick={(e) => setIsMenuOpen(true)}>
          <BsListTask />
        </div>
      </div>
      {isMenuOpen && <div className="fixed left-0 top-0 h-full w-screen" onClick={(e) => setIsMenuOpen(false)} />}
      {isMenuOpen && <div className="absolute bg-black bg-opacity-5 backdrop-blur-sm" />}
      <div
        id="mobile-menu"
        className={`fixed left-0 top-0 z-50  h-full w-full max-w-xs bg-white pt-16 backdrop-blur duration-150 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-96"
        } `}
        ref={mobileMenu}
      >
        <BsListTask />
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
