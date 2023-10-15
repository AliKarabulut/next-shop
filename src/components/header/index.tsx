import React from "react";
import HeaderContainer from "./container";
import Search from "./search";

const Header = () => {
  return (
    <header className="bg-neutral-100 ">
      <HeaderContainer>
        <div className="text-3xl">
            E commerce
        </div>
        <Search/>
      </HeaderContainer>
    </header>
  );
};

export default Header;
