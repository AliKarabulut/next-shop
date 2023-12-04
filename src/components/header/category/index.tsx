"use client";
import { CategoryItem } from "./categoryItem";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import React from "react";

const DummyMenuContent = [
  { name: "Laptops & Computer", href: "/" },
  { name: "Cameras", href: "/" },
  { name: "Smartphones & Tablets", href: "/" },
  { name: "Gaming", href: "/" },
  { name: "TV & Audio", href: "/" },
  { name: "Headphones", href: "/" },
  { name: "Smartwatches", href: "/" },
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
        <SwiperSlide className="!h-10 !flex !items-center !w-auto first:pl-0 first:pr-0" key={index}>
          <CategoryItem name={badge.name} href={badge.href} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoryList;
