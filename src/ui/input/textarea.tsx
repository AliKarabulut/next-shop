"use client";
import { useState, useEffect, useRef } from "react";

type TextAreaProps = {
  label: string;
  name: string;
  onChange: (e: any) => void;
};

const TextArea = ({ label, name, onChange }: TextAreaProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const textAreaRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
    onChange({ name: name, data: e.target.value });
  };

  return (
    <div className="relative flex items-center" ref={textAreaRef}>
      <label
        htmlFor={name}
        className={`absolute text-admin-grey-500 transition-all ${open || textAreaValue ? "-top-5 text-xs " : "pl-3 text-base top-2"}`}
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        onChange={handleChange}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={`rounded-xl px-3 w-full py-2 outline-none hover:shadow-md cursor-pointer focus:cursor-text shadow-admin-secondary-dark transition-all text-base capitalize focus:shadow-md `}
        style={{ caretColor: "#697586" }}
        autoComplete="off"
      />
    </div>
  );
};

export default TextArea;
