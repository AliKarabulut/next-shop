"use client";

import DemoSwiperImageAdder from "@/components/swipers/demo-swiper/image-adder";

type DemoSwiperProps = {
  description?: string;
  name: string;
};

const DemoSwiper = ({ description, name }: DemoSwiperProps) => {
  return (
    <div className="bg-gradient-to-r from-grayLighter to-grayLight">
      <div className="flex h-96 items-center justify-between xl:px-32 container mx-auto">
        <div className="" dangerouslySetInnerHTML={{ __html: description || "" }} />
        <DemoSwiperImageAdder name={name} />
      </div>
    </div>
  );
};

export default DemoSwiper;
