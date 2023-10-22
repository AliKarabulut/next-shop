"use client";
import { CategoryItem } from "./categoryItem";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import React from "react";

const DummyMenuContent = [
  { name: "Laptops & Computer", isBold: true },
  { name: "Cameras", isBold: true },
  { name: "Smartphones & Tablets", isBold: true },
  { name: "Gaming", isBold: false },
  { name: "TV & Audio", isBold: false },
  { name: "Headphones", isBold: false },
  { name: "Smartwatches", isBold: false },
];

const CategoryList = () => {
  return (
    <div>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        slidesPerView="auto"
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          disableOnInteraction: false,
        }}
        className="sm:!-mx-2"
      >
        {DummyMenuContent.map((badge, index) => (
          <SwiperSlide className="!h-10 !flex !items-center !w-auto first:pl-0 first:pr-0" key={index}>
            <CategoryItem name={badge.name} href="/" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryList;
