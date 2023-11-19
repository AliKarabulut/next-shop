"use client";
import Input from "@/ui/input/input";
import axios from "axios";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });

const Slider = () => {
  const [value, setValue] = useState("asdasd");
  const [file, setFile] = useState<File | null>(null);
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      [{ align: [] }],
    ],
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (!file) return;
    const data = new FormData()
    data.set('file', file)
    data.set('description', value)
    axios.post("/api/product/slider", data).then((res) => console.log(res));
  };

  return (
    <div>
      <div className="min-h-[85px] h-full  mt-5">
        <DynamicQuill theme="snow" value={value} onChange={setValue} modules={modules} className="bg-white rounded-lg" />
      </div>
      <form onSubmit={submitHandler}>
        <input type="file" name="file" onChange={(e:any) => setFile(e.target.files?.[0])} />
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default Slider;
