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
    <nav className="flex-shrink-0 px-4 py-6 bg-white h-[calc(100vh-80px)]">
      <Button text="Order" href="order">
        <TruckDeliveryIcon className="flex-shrink-0" />
      </Button>
      <Button text="E-commerce" subMenuItems={list}>
        <BasketIcon className="flex-shrink-0" />
      </Button>
      <Button text="Mail" href="mail">
        <MailIcon className="flex-shrink-0" />
      </Button>
    </nav>
  );
};

export default LeftMenu;
