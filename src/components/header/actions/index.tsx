import ActionIcon from "./actionButton";
import Link from "next/link";

import { BsHeart, BsHandbag } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { BiUser } from "react-icons/bi";

const DummyDropDown = [
  { title: "Login", link: "/" },
  { title: "Register", link: "/" },
];

type DropDownType = {
  className?: string;
};

const ActionButtons = ({ className }: DropDownType) => {
  return (
    <div className={`flex gap-10 ${className}`}>
      <ActionIcon quantity={2}>
        <IoIosGitCompare size={22} />
      </ActionIcon>
      <ActionIcon>
        <BsHeart size={22} />
      </ActionIcon>
      <ActionIcon dropDown={DummyDropDown}>
        <BiUser size={22} />
      </ActionIcon>
      <ActionIcon quantity={4} price={110.0}>
        <BsHandbag size={22} />
      </ActionIcon>
    </div>
  );
};

export default ActionButtons;
