"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });

const Quill = () => {
  const [value, setValue] = useState("");

  const modules = useMemo(
    () => ({
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
    }),
    []
  );

  return (
    <div className="min-h-[85px] h-full mt-5">
      <DynamicQuill theme="snow" value={value} onChange={setValue} modules={modules} className="bg-white rounded-lg" />
      <input type="text" name="description" className="invisible" value={value} readOnly/>
    </div>
  );
};

export default Quill;
