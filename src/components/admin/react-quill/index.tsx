"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false });

const Quill = () => {
  const [value, setValue] = useState("");
  const [content, setContent] = useState("");

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: 1 }, { header: 2 }],
        [{ script: "sub" }, { script: "super" }],
        [{ color: [] }, { background: [] }],
      ],
    }),
    []
  );

  useEffect(() => {
    const sanitizedHTML = DOMPurify.sanitize(value);
    setContent(sanitizedHTML);
  }, [value]);

  return (
    <div className="max-w-3xl w-full min-h-[114px] h-full">
      <DynamicQuill theme="snow" value={value} onChange={setValue} modules={modules} className="bg-white rounded-lg" />
      <input type="text" name="description" className="invisible" value={value} readOnly />
    </div>
  );
};

export default Quill;
