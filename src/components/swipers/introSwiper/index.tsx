"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SwiperProps = {
  slides?: {
    title?: string;
    description?: string;
    boldText?: string;
    price: string;
    link?: {
      url: string;
      name: string;
    };
    image?: {
      src: string;
      bg: string;
    };
  }[];
};

const IntroSwiper = ({ slides }: SwiperProps) => {
  return (
    <div>
      <Swiper modules={[Pagination, Navigation]} slidesPerView={1} pagination={{ clickable: true }} navigation className="h-96">
        <SwiperSlide className="bg-gradient-to-r  from-grayLighter to-grayLight"></SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r  from-grayLighter to-grayLight"></SwiperSlide>
        <SwiperSlide className="bg-gradient-to-r from-grayLighter to-grayLight"></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IntroSwiper;
