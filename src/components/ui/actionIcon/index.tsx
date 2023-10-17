import React from "react";

type ActionIconProps = {
  children: React.ReactNode;
  quantity?: number;
  price?: number;
};

const ActionIcon = ({ children, quantity, price }: ActionIconProps) => {
  return (
    <div className="actionIcon group relative cursor-pointer duration-300 flex gap-2 items-center">
      {children}
      {quantity && (
        <div className="rounded-full w-5 h-5 bg-yellow absolute left-3.5 -bottom-2.5 text-sm flex items-center justify-center group-hover:animate-pulse duration-300 font-medium">
          {quantity <= 9 ? quantity : "+9"}
        </div>
      )}
      {price && <div className="text-sm font-bold">${price}</div>}
    </div>
  );
};

export default ActionIcon;
