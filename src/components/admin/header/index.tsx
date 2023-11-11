"use client";
import { useDispatch } from "react-redux";
import { narrowedAction } from "@/store/admin/isNarrowed";
import MenuIcon from "@/icons/admin/menu";
import SettingsIcon from "@/icons/admin/settings";
import IconButton from "@/ui/icon-button";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const toggleExpanded = () => {
    dispatch(narrowedAction.toggle());
    dispatch(narrowedAction.click());
  };

  return (
    <header className="h-20 px-6 py-4 bg-white flex justify-between items-center gap-4">
      <div className="flex items-center w-full sm:w-fit ">
        <h1 className="w-48">Admin</h1>
        <IconButton onClick={toggleExpanded} className="max-sm:hidden">
          <MenuIcon />
        </IconButton>
        <IconButton onClick={()=> dispatch(narrowedAction.mobileToggle())} className="block sm:hidden ml-auto">
          <MenuIcon />
        </IconButton>
      </div>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </header>
  );
};

export default Header;
