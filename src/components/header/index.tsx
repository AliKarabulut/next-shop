import HeaderContainer from "./container";
import HeaderTopMenu from "./topMenu";

const Header = () => {
  return (
    <header className="min-h-[112px] md:min-h-[164px]">
      <HeaderTopMenu />
      <HeaderContainer />
    </header>
  );
};

export default Header;
