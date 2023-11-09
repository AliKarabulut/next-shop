import TruckDeliveryIcon from "@/icons/admin/truck";
import IconButton from "./button";

import BasketIcon from "@/icons/admin/basket";
import MailIcon from "@/icons/admin/mail";

const list = [
  { item: "New Prouct", href: "new-product" },
  { item: "Edit Product", href: "edit-product" },
  { item: "Products", href: "products" },
];

const LeftMenu: React.FC = () => {
  return (
    <nav className="max-w-[16rem] w-full px-4 py-6 bg-white h-[calc(100vh-80px)]">
      <IconButton text="Order" href="order">
        <TruckDeliveryIcon />
      </IconButton>
      <IconButton text="E-commerce" subMenuItems={list}>
        <BasketIcon />
      </IconButton>
      <IconButton text="Mail" href="mail">
        <MailIcon />
      </IconButton>
    </nav>
  );
};

export default LeftMenu;
