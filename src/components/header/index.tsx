import React from "react";
import HeaderContainer from "./container";
import Search from "./search";
import ActionButtons from "./actions";
import CategoryMenu from "./category";

const Header = () => {
  return (
    <header className="bg-neutral-100 ">
      <HeaderContainer>
        <div className="flex justify-between w-full items-center gap-10">
          <div className="text-3xl whitespace-nowrap">E commerce</div>
          <Search />
          <ActionButtons />
        </div>
        <div className="flex justify-between gap-10">
          <CategoryMenu />
          <div className="text-sm font-semibold">Free Shipping on Orders $500+</div>
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
