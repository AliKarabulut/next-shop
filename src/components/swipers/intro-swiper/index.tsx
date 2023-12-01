"use client";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type SwiperProps = {
  slides: {
    id: string;
    description: string;
    imageId: string;
    image: {
      id: string;
      urls: string[];
      main: boolean;
      optionId: string | null;
      sliderId: string | null;
    };
  }[];
};

const IntroSwiper = ({ slides }: SwiperProps) => {

  return (
    <Swiper modules={[Pagination, Navigation]} slidesPerView={1} pagination={{ clickable: true }} navigation className="h-96">
      {slides?.map((slide, index) => (
        <SwiperSlide key={index} className="bg-gradient-to-r from-grayLighter to-grayLight flex justify-between">
          <div dangerouslySetInnerHTML={{ __html: slide.description }} />
          <div className="relative h-full max-w-lg  w-full">
            {slide.image.urls[0] && <Image src={`/${slide.image.urls[0]}`} alt={`Slide image ${index}`} fill />}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IntroSwiper;
