"use client";
import { useDispatch } from "react-redux";
import { narrowedAction } from "@/store/admin/isNarrowed";
import MenuIcon from "@/icons/admin/menu";
import SettingsIcon from "@/icons/admin/settings";
import IconButton from "@/ui/icon-button";

interface Props {}

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const toggleExpanded = () => {
    dispatch(narrowedAction.toggle());
  };

  return (
    <header className="h-20 px-6 py-4 bg-white flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="w-48">Admin</h1>
        <IconButton onClick={toggleExpanded}>
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
