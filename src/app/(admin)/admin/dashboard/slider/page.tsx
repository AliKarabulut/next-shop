"use client";
import { addSlider } from "@/services/slider-services";
import Quill from "@/components/admin/react-quill";

const Slider = () => {
  const submitHandler = async (event: any) => {
    event.preventDefault();
    const data = new FormData();
    data.set("file", event.target.file.files[0]);
    data.set("description", event.target.description.value);
    const response = await addSlider(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Quill />
        <input type="file" name="file" />
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default Slider;
