"use client";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

type SwiperProps = {
  fileList?: FileList;
};

const ProductSwiper = ({ fileList }: SwiperProps) => {
  return (
    <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }} spaceBetween={20} navigation className="h-[17.5rem]">
      {fileList &&
        Array.from(fileList).map((file, index) => (
          <SwiperSlide key={index} className="relative">
            <Image fill src={URL.createObjectURL(file)} alt="product image" className="object-contain pb-4" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ProductSwiper;
