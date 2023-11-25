"use client";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type SwiperProps = {
  slides?: {
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
  demo?: boolean;
  description?: string;
  image?: File[];
};

const IntroSwiper = ({ slides = [], demo = false, description, image }: SwiperProps) => {
  return (
    <Swiper modules={[Pagination, Navigation]} slidesPerView={1} pagination={{ clickable: true }} navigation className="h-96">
      {!demo ? (
        slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-gradient-to-r from-grayLighter to-grayLight flex justify-between">
            <div dangerouslySetInnerHTML={{ __html: slide.description }} />
            <div className="relative">
              {slide.image.urls[0] && <Image src={`/${slide.image.urls[0]}`} alt={`Slide image ${index}`} layout="fill" />}
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="bg-gradient-to-r from-grayLighter to-grayLight container !flex justify-between w-full">
          <div dangerouslySetInnerHTML={{ __html: description || "" }} />
          <div className="relative h-full max-w-lg  w-full">
            {image && image.length > 0 && (
              <Image src={URL.createObjectURL(image[0])} alt="Slide image" fill className="object-contain bg-transparent" />
            )}
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default IntroSwiper;
