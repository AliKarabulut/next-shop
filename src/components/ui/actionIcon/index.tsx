import React from "react";

type ActionIconProps = {
  children: React.ReactNode;
  number?: number;
};

const ActionIcon = ({ children, number }: ActionIconProps) => {
  return (
    <div className="actionIcon group relative cursor-pointer duration-300">
      {children}
      {number && (
        <div className="rounded-full w-5 h-5 bg-yellow-500 absolute -right-2.5 -bottom-2.5 text-sm flex items-center justify-center group-hover:animate-pulse ">{number}</div>
      )}
    </div>
  );
};

export default ActionIcon;
