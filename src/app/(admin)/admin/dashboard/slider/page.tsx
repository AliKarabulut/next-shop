"use client";
import { addSlider } from "@/services/slider-services";
import Quill from "@/components/admin/react-quill";
import { quillCssConverter } from "@/utils/quill-css-converter";
import IconButton from "@/ui/icon-button";
import DemoSwiper from "@/components/swipers/demo-swiper";
import { useCallback, useState } from "react";

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

  console.log("Slider");
  return (
    <div className="mt-8">
      <form onSubmit={submitHandler}>
        <DemoSwiper name="file" description={description} />
        <Quill onValue={setDescription} />
        <IconButton label="Upload" type="submit" className="bg-white opacity-100 shadow-md mt-4"></IconButton>
      </form>
    </div>
  );
};

export default Slider;
