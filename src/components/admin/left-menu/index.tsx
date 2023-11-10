import TruckDeliveryIcon from "@/icons/admin/truck";
import BasketIcon from "@/icons/admin/basket";
import MailIcon from "@/icons/admin/mail";
import Button from "@/ui/button";

const list = [
  { item: "New Prouct", href: "new-product" },
  { item: "Edit Product", href: "edit-product" },
  { item: "Products", href: "products" },
];

const LeftMenu: React.FC = () => {
  return (
    <nav className="w-64 flex-shrink-0 px-4 py-6 bg-white h-[calc(100vh-80px)]">
      <Button text="Order" href="order">
        <TruckDeliveryIcon />
      </Button>
      <Button text="E-commerce" subMenuItems={list}>
        <BasketIcon />
      </Button>
      <Button text="Mail" href="mail">
        <MailIcon />
      </Button>
    </nav>
  );
};

export default LeftMenu;
