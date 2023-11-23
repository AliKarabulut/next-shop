"use client";
import UploadIcon from "@/icons/admin/upload";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";

type FileInputProps = {
  name: string;
  onImages: (images: FileList | null) => void;
};

const FileInput = ({ name, onImages }: FileInputProps) => {
  const [images, setImages] = useState<File[]>([]);

  const deleteHandler = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    onImages(newImages);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
      onImages(files);
    }
  };

  return (
    <div className="bg-white max-w-lg w-full shadow-lg px-6 py-4 rounded-2xl ">
      <div className="relative">
        {images.length === 0 && (
          <div className="w-full flex items-center justify-center flex-col text-center mt-2.5 mb-4 px-2 py-8 rounded-[40px] border-2 border-dashed border-admin-secondary-main">
            <UploadIcon className="w-9 h-9 flex-shrink-0" />
            <h3 className="text-2xl my-4"> Drag &amp; drop any file here </h3>
            <div className="flex gap-1 text-xl whitespace-nowrap">
              or
              <span className="text-admin-primary-dark font-medium cursor-pointer">browse file</span>
              from device
            </div>
          </div>
        )}
        <input
          type="file"
          name={name}
          id={name}
          onChange={changeHandler}
          multiple
          className="opacity-0 left-0 top-0 absolute w-full h-full cursor-pointer"
        />
      </div>
      {images.length !== 0 && (
        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }} spaceBetween={20} navigation className="h-[17.5rem]">
          {Array.from(images).map((file: File, index: number) => (
            <SwiperSlide key={index} className="relative">
              <div className="ml-auto w-fit cursor-pointer relative z-50" onClick={(e) => deleteHandler(index)}>
                Del
              </div>
              <Image fill src={URL.createObjectURL(file)} alt="product image" className="object-contain pb-4" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FileInput;
