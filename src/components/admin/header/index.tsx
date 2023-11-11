"use client";
import { useDispatch, useSelector } from "react-redux";
import { narrowedAction } from "@/store/admin/isNarrowed";
import MenuIcon from "@/icons/admin/menu";
import SettingsIcon from "@/icons/admin/settings";
import IconButton from "@/ui/icon-button";
import { useEffect } from "react";

interface Props {}

const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const isNarrowed = useSelector((state: any) => state.isNarrowed.isNarrowed);

  const toggleExpanded = () => {
    dispatch(narrowedAction.toggle());
  };

  return (
    <header className="h-20 px-6 py-4 bg-white flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="w-48">Admin</h1>
        <IconButton onClick={toggleExpanded} className="max-md:invisible">
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
