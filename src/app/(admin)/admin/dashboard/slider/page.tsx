"use client";
import { addSlider } from "@/services/slider-services";
import Quill from "@/components/admin/react-quill";
import FileInput from "@/ui/input/file-input";
import { quillCssConverter } from "@/utils/quill-css-converter";
import IconButton from "@/ui/icon-button";
import IntroSwiper from "@/components/swipers/introSwiper";
import { useEffect, useState } from "react";

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
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between max-xl:flex-col mt-5 gap-4 w-full">
          <Quill />
          <FileInput name="file" onImages={setImages} />
        </div>
        <IconButton label="Upload" type="submit" className="bg-white opacity-100 shadow-md mt-4"></IconButton>
      </form>
      <div className="container !px-0 mx-auto mt-8">
        <IntroSwiper demo={true} image={images} />
      </div>
    </div>
  );
};

export default Slider;
