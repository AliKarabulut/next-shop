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
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      className="h-96 bg-gradient-to-r from-grayLighter to-grayLight"
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index} className="!flex items-center justify-between xl:px-32 container mx-auto">
          <div dangerouslySetInnerHTML={{ __html: slide.description }} />
          <div className="relative h-full max-w-lg w-full">
            {slide.image.urls[0] && <Image src={slide.image.urls[0]} alt={`Slide image ${index}`} fill className="object-contain h-full" />}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IntroSwiper;
