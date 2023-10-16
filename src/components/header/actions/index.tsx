import ActionIcon from "@/components/ui/actionIcon";
import Link from "next/link";

import { BsHeart, BsHandbag } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";

const ActionButtons = () => {
  return (
    <div className="flex gap-9">
      <ActionIcon>
        <BsHeart size={24} />
      </ActionIcon>
      <ActionIcon number={4}>
        <BsHandbag size={24} />
      </ActionIcon>
      <ActionIcon number={2}>
        <IoIosGitCompare size={24} />
      </ActionIcon>
    </div>
  );
};

export default ActionButtons;
