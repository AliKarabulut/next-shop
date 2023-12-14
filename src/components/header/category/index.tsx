"use client";
import { CategoryItem } from "./categoryItem";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CameraIcon from "@/icons/e-commerce/camera";
import ComputerIcon from "@/icons/e-commerce/computer";
import GamepadIcon from "@/icons/e-commerce/gamepad";
import HeadphonesIcon from "@/icons/e-commerce/headphones";
import PhoneIcon from "@/icons/e-commerce/phone";
import TvIcon from "@/icons/e-commerce/tv";
import WatchIcon from "@/icons/e-commerce/watch";

const DummyMenuContent = [
  { name: "Laptops & Computer", href: "/", icon: <ComputerIcon /> },
  { name: "Cameras", href: "/", icon: <CameraIcon /> },
  { name: "Smartphones & Tablets", href: "/", icon: <PhoneIcon /> },
  { name: "Gaming", href: "/", icon: <GamepadIcon /> },
  { name: "TV & Audio", href: "/", icon: <TvIcon /> },
  { name: "Headphones", href: "/", icon: <HeadphonesIcon /> },
  { name: "Smartwatches", href: "/", icon: <WatchIcon /> },
];

const CategoryList = () => {
  return (
    <Swiper
      modules={[Scrollbar, Autoplay]}
      slidesPerView="auto"
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        disableOnInteraction: false,
      }}
      className="sm:!-mx-2 w-full"
    >
      {DummyMenuContent.map((badge, index) => (
        <SwiperSlide className="!h-10 !flex !items-center !w-auto first:pl-0 first:pr-0 mx-auto" key={index}>
          <CategoryItem name={badge.name} href={badge.href} icon={badge.icon} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoryList;
