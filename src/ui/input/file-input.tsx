"use client";
import UploadIcon from "@/icons/admin/upload";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import ImagePlus from "@/icons/admin/image-plus";
import ImageIcon from "@/icons/admin/image";

type FileInputProps = {
  name: string;
  onImages: (images: FileList | null) => void;
};

const FileInput = ({ name, onImages }: FileInputProps) => {
  const [images, setImages] = useState<File[]>([]);
  const [dragging, setDragging] = useState<boolean>(false);

  const deleteHandler = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    onImages(newImages);
    if(images.length === 1) setDragging(false)
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
      onImages(files);
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

  return (
    <div className="bg-white max-w-md shadow-lg px-6 py-3 rounded-2xl ">
      <div className="relative">
        {images.length === 0 && (
          <div className="w-full flex items-center justify-center flex-col text-center my-4 h-52 rounded-[40px] border-2 border-dashed border-admin-secondary-main">
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
        )}
        <input
          type="file"
          name={name}
          id={name}
          onChange={changeHandler}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          multiple
          className="opacity-0 left-0 top-0 absolute w-full h-full cursor-pointer"
        />
      </div>
      {images.length !== 0 && (
        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }} spaceBetween={20} navigation className="h-[15rem]">
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
