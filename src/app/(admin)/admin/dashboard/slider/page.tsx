"use client";
import { addSlider } from "@/services/slider-services";
import Quill from "@/components/admin/react-quill";
import FileInput from "@/ui/input/file-input";
import { quillCssConverter } from "@/utils/quill-css-converter";
import IconButton from "@/ui/icon-button";

const Slider = () => {
  const submitHandler = async (event: any) => {
    event.preventDefault();
    const description = quillCssConverter(event.target.description.value);
    const data = new FormData();
    data.set("file", event.target.file.files[0]);
    data.set("description", description);
    const response = await addSlider(data);
    
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col mt-5 gap-4 ">
          <Quill />
          <FileInput name="file" />
        </div>
        <IconButton label="Upload" className="bg-white opacity-100 shadow-md mt-4"></IconButton>
      </form>
    </div>
  );
};

export default Slider;
