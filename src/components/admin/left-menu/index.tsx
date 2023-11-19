"use client";
import { useDispatch, useSelector } from "react-redux";
import { narrowedAction } from "@/store/admin/isNarrowed";
import TruckDeliveryIcon from "@/icons/admin/truck";
import BasketIcon from "@/icons/admin/basket";
import MailIcon from "@/icons/admin/mail";
import Button from "@/ui/button";
import HandMoveIcon from "@/icons/admin/hand-move";

const list = [
  { item: "New Prouct", href: "new-product" },
  { item: "Edit Product", href: "edit-product" },
  { item: "Products", href: "products" },
];

const LeftMenu: React.FC = () => {
  const isMobile = useSelector((state: any) => state.isNarrowed.isMobile);
  const isClicked = useSelector((state: any) => state.isNarrowed.isClicked);
  const dispatch = useDispatch();

  return (
    <nav
      className={`flex-shrink-0 px-4 py-6 bg-white h-[calc(100vh-80px)] max-sm:absolute z-10 top-20 left-0 duration-300 ${
        isMobile ? "max-sm:translate-x-0" : "max-sm:-translate-x-72 "
      } `}
      onMouseEnter={() => isClicked && dispatch(narrowedAction.onNarrowed())}
      onMouseLeave={() => isClicked && dispatch(narrowedAction.offNarrowed())}
    >
      <Button text="Order" href="order">
        <TruckDeliveryIcon className="flex-shrink-0" />
      </Button>
      <Button text="E-commerce" subMenuItems={list}>
        <BasketIcon className="flex-shrink-0" />
      </Button>
      <Button text="Mail" href="mail">
        <MailIcon className="flex-shrink-0" />
      </Button>
      <Button text="Slider" href="slider">
        <HandMoveIcon className="flex-shrink-0"/>
      </Button>
    </nav>
  );
};

export default LeftMenu;
