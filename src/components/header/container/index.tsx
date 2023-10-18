"use client";
import React, { useState, useEffect } from "react";
import Search from "../search";
import ActionButtons from "../actions";
import CategoryMenu from "../category";

const HeaderContainer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollSmall, setIsScrollSmall] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY === 0) {
      setIsScrollSmall(true);
    } else if (scrollY > 156) {
      setIsScrollSmall(false);
    }
  }, [scrollY]);

  return (
    <div className={`w-full  ${!isScrollSmall ? "fixed top-[-150px] animate-open duration-300 shadow-md" : ""}`}>
      <div className={`container mx-auto flex flex-col gap-10 duration-300 ${!isScrollSmall ? "py-2.5" : "pt-8"}`}>
        <div className="flex justify-between w-full items-center gap-10">
          <div className="text-3xl whitespace-nowrap">E commerce</div>
          <Search />
          <ActionButtons />
        </div>
        {isScrollSmall && (
          <div className="flex justify-between gap-10">
            <CategoryMenu />
            <div className="text-sm font-semibold">Free Shipping on Orders $500+</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderContainer;
