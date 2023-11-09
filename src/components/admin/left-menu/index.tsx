import TruckDeliveryIcon from "@/icons/admin/truck";
import IconButton from "./icon-button";

import BasketIcon from "@/icons/admin/basket";
import MailIcon from "@/icons/admin/mail";

const list = [
  { item: "Product", href: "product" },
  { item: "Category", href: "category" },
  { item: "Brand", href: "brand" },
];

const LeftMenu: React.FC = () => {
  return (
    <div className="max-w-[16rem] w-full px-4 py-6 bg-white h-screen">
      <IconButton text="Order" href="order">
        <TruckDeliveryIcon />
      </IconButton>
      <IconButton text="E-commerce" subMenuItems={list}>
        <BasketIcon />
      </IconButton>
      <IconButton text="Mail" href="mail">
        <MailIcon />
      </IconButton>
    </div>
  );
};

export default LeftMenu;
