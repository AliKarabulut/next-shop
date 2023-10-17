"use client"
import React, { useState, useEffect } from "react";

type HeaderContainerProps = {
  children: React.ReactNode;
};

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return <div className={`container mx-auto flex flex-col gap-10 ${scrollY > 150 ? "py-2.5 drop-shadow-md" : "pt-8"}`}>{children}</div>;
};

export default HeaderContainer;
