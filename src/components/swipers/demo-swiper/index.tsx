"use client";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useRef, useState } from "react";
import ImageIcon from "@/icons/admin/image";
import ImagePlus from "@/icons/admin/image-plus";
import IconButton from "@/ui/icon-button";
import TrashIcon from "@/icons/admin/trash";

type DemoSwiperProps = {
  description?: string;
  name: string;
};

const DemoSwiper = ({ description, name }: DemoSwiperProps) => {
  const [image, setImage] = useState<File[]>([]);
  const [dragging, setDragging] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImage(files);
      setDragging(false);
    }
  };

  const dragOverHandler = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(true);
  };

  const dragLeaveHandler = (event: React.DragEvent) => {
    event.preventDefault();
    setDragging(false);
  };

  const deleteHandler = () => {
    setImage([]);
    inputRef.current!.value = "";
  };

  return (
    <Swiper modules={[Pagination, Navigation]} slidesPerView={1} pagination={{ clickable: true }} navigation className="h-96 container !px-0 !mx-0">
      <SwiperSlide className="bg-gradient-to-r from-grayLighter to-grayLight container !flex justify-between w-full">
        <div dangerouslySetInnerHTML={{ __html: description || "" }} />
        {image.length > 0 ? (
          <div className="relative h-full max-w-lg">
            <IconButton className="ml-auto absolute -mr-6 right-0 cursor-pointer drop-shadow-lg rounded-none rounded-bl-2xl" onClick={deleteHandler}>
              <TrashIcon />
            </IconButton>
            <Image src={URL.createObjectURL(image[0])} alt="Slide image" width={500} height={384} className="object-cover h-full w-fit" />
          </div>
        ) : (
          <div className="max-w-sm w-full relative flex items-center justify-center">
            <div className="w-full flex items-center justify-center flex-col  text-center h-52 rounded-[40px] border-2 border-dashed border-admin-secondary-main">
              {!dragging ? (
                <>
                  <ImageIcon className="w-12 h-12 flex-shrink-0 text-admin-secondary-800" />
                  <h3 className="text-2xl my-4"> Drag &amp; drop any file here </h3>
                  <div className="flex gap-1 text-xl whitespace-nowrap">
                    or
                    <span className="text-admin-secondary-dark font-medium cursor-pointer">browse file</span>
                    from device
                  </div>
                </>
              ) : (
                <div className="h-52 flex items-center justify-center">
                  <ImagePlus className="w-28 h-28 text-admin-secondary-800 flex-shrink-0" />
                </div>
              )}
            </div>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          name={name}
          id={name}
          onChange={changeHandler}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          className={`opacity-0 left-0 top-0 absolute w-full h-full cursor-pointer ${image.length > 0 && "invisible"}`}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default DemoSwiper;
