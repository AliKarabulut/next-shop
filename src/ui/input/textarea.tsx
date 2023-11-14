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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (textAreaRef.current && !textAreaRef?.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clickHandler = (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
    setOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
    onChange({ name: name, data: e.target.value });
  };

  return (
    <div className="w-fit" ref={textAreaRef}>
      <div className="relative w-fit gap-2 flex items-center">
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
          onClick={clickHandler}
          className={`rounded-xl px-3 py-2 outline-none hover:shadow-md shadow-admin-secondary-dark transition-all text-base capitalize focus:shadow-md ${
            open ? "cursor-text" : "cursor-pointer"
          }`}
          style={{ caretColor: "#697586" }}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default TextArea;
