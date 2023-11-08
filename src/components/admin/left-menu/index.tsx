import React, { useState } from "react";
import IconButton from "./icon-button";
import { TbBasket } from "react-icons/tb";
import BasketIcon from "@/icons/admin/basket";
interface MenuItem {
  title?: string;
  subMenuItems?: MenuItem[];
}

interface LeftMenuProps {
  menuItems: MenuItem[];
}

const list: string[] = ["Products", "Product Details", "Add Product", "Edit Product"];

const LeftMenu: React.FC<LeftMenuProps> = () => {
  return (
    <div className="w-64 px-4 py-6">
      <IconButton text="E-commerce" subMenuItems={list}>
        <BasketIcon />
      </IconButton>
    </div>
  );
};

export default LeftMenu;
