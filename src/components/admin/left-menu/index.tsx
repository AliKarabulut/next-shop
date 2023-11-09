import TruckDeliveryIcon from "@/icons/admin/truck";
import IconButton from "./icon-button";

import BasketIcon from "@/icons/admin/basket";
import MailIcon from "@/icons/admin/mail";


const list: string[] = ["Products", "Product Details", "Add Product", "Edit Product"];

const LeftMenu: React.FC = () => {
  return (
    <div className="w-64 px-4 py-6">
      <IconButton text="Order">
        <TruckDeliveryIcon />
      </IconButton>
      <IconButton text="E-commerce" subMenuItems={list}>
        <BasketIcon />
      </IconButton>
      <IconButton text="Mail">
        <MailIcon />
      </IconButton>
    </div>
  );
};

export default LeftMenu;
