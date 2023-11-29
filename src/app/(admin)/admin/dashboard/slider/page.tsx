"use client";
import { addSlider } from "@/services/slider-services";
import Quill from "@/components/admin/react-quill";
import { quillCssConverter } from "@/utils/quill-css-converter";
import IconButton from "@/ui/icon-button";
import DemoSwiper from "@/components/swipers/demo-swiper";
import { useState } from "react";

const Slider = () => {
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState<string>("");

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const description = quillCssConverter(event.target.description.value);
    const data = new FormData();
    data.append("file", event?.target?.file?.files[0] || "");
    data.set("description", description);
    const response = await addSlider(data);
  };

  return (
    <div className="mt-8">
      <form onSubmit={submitHandler}>
        <DemoSwiper name="file" />
        <div className="flex justify-between max-xl:flex-col mt-5 gap-4 w-full">
          <Quill />
        </div>
        <IconButton label="Upload" type="submit" className="bg-white opacity-100 shadow-md mt-4"></IconButton>
      </form>
    </div>
  );
};

export default Slider;
