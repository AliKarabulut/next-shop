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
      className="h-96 py-2 bg-gradient-to-r from-grayLighter to-grayLight"
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-12 items-center xl:px-32 container mx-auto w-full">
            <div className="col-span-6 sm:col-span-8" dangerouslySetInnerHTML={{ __html: slide.description }} />
            <div className="col-span-6 sm:col-span-4 ml-auto h-96">
              {slide.image.urls[0] && (
                <Image src={slide.image.urls[0]} alt={`Slide image ${index}`} width={520} height={380} className="object-contain h-full w-fit" />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IntroSwiper;
