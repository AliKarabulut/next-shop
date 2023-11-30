"use client";
import dynamic from "next/dynamic";
import DOMPurify from "dompurify";
import { quillCssConverter } from "@/utils/quill-css-converter";
import { useDebouncedCallback } from "use-debounce";
const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

type QuillProps = {
  onValue: (value: string) => void;
};

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: 1 }, { header: 2 }],
    [{ script: "sub" }, { script: "super" }],
    [{ color: [] }, { background: [] }],
  ],
};

const Quill = ({ onValue }: QuillProps) => {
  const changeHandler = useDebouncedCallback((content: string) => {
    const newContent = quillCssConverter(DOMPurify.sanitize(content));
    onValue(newContent);
  }, 500);

  return (
    <div className="max-w-3xl w-full min-h-[114px] h-full mt-5">
      <DynamicQuill theme="snow" onChange={changeHandler} modules={modules} className="bg-white rounded-lg" />
    </div>
  );
};

export default Quill;
