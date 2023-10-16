import React from "react";
import HeaderContainer from "./container";
import Search from "./search";
import ActionButtons from "./actions";

const Header = () => {
  return (
    <header className="bg-neutral-100 ">
      <HeaderContainer>
        <div className="text-3xl whitespace-nowrap">
            E commerce
        </div>
        <Search/>
        <ActionButtons/>
      </HeaderContainer>
    </header>
  );
};

export default Header;
