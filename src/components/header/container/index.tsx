"use client";
import React, { useState, useEffect } from "react";
import Search from "../search";
import ActionButtons from "../actions";
import CategoryList from "../category";

const HeaderContainer = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrollSmall, setIsScrollSmall] = useState<boolean>(true);
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
    if (scrollY <= 32) {
      setIsScrollSmall(true);
    } else if (32 < scrollY && scrollY < 164) {
      return;
    } else if (scrollY >= 164) {
      setIsScrollSmall(false);
    }
  }, [scrollY]);

  return (
    <div className={`w-full bg-white max-md:py-2.5 z-50 ${!isScrollSmall ? "!fixed top-[-150px] animate-open shadow-md " : ""}`}>
      <div className={`container mx-auto flex flex-col gap-4 ${!isScrollSmall ? "md:py-2.5" : "md:pt-8"}`}>
        <div className="flex justify-between w-full items-center gap-10">
          <div className="text-3xl whitespace-nowrap">E commerce</div>
          <Search />
          <ActionButtons className="max-md:hidden" />
        </div>
        {isScrollSmall && <CategoryList />}
      </div>
    </div>
  );
};

export default HeaderContainer;
