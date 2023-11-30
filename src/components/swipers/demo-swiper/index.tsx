"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import DemoSwiperImageAdder from "./image-adder";

type DemoSwiperProps = {
  description?: string;
  name: string;
};

const DemoSwiper = ({ description, name }: DemoSwiperProps) => {
  console.log("DemoSwiper");

  return (
    <Swiper modules={[Pagination, Navigation]} slidesPerView={1} pagination={{ clickable: true }} navigation className="h-96 max-w-[1536px] !px-0 !mx-0">
      <SwiperSlide className="bg-gradient-to-r from-grayLighter to-grayLight !flex justify-between">
        <div dangerouslySetInnerHTML={{ __html: description || "" }} />
        <DemoSwiperImageAdder name={name} />
      </SwiperSlide>
    </Swiper>
  );
};

export default DemoSwiper;
