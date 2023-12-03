"use client";
import { addSlider } from "@/services/slider-services";
import { quillCssConverter } from "@/utils/quill-css-converter";
import IconButton from "@/ui/icon-button";
import DemoSwiper from "@/components/swipers/demo-swiper";
import {useState } from "react";
import dynamic from 'next/dynamic';

const Ck5Editor = dynamic( () => {
  return import( '@/components/admin/ck5editor' );
}, { ssr: false } );


const Slider = () => {
  const [description, setDescription] = useState<string>("");

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const desc = quillCssConverter(description);
    const data = new FormData();
    data.append("file", event?.target?.file?.files[0] || "");
    data.set("description", desc);
    const response = await addSlider(data);
  };

  return (
    <div className="mt-8">
      <form onSubmit={submitHandler}>
        <DemoSwiper name="file" description={description} />
        <Ck5Editor onValue={setDescription} />
        <IconButton label="Upload" type="submit" className="bg-white opacity-100 shadow-md mt-4"></IconButton>
      </form>
    </div>
  );
};

export default Slider;
