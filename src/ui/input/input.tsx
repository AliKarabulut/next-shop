"use client";
import { useState, useEffect, useRef } from "react";

type InputProps = {
  type?: "number" | "text" | "password" | "email";
  label: string;
  name: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange?: (e: any) => void;
};

const Input = ({ label, name, onChange, inputClassName, labelClassName, type = "text" }: InputProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef?.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange({ name: name, data: e.target.value });
  };

  return (
    <div className="relative" ref={inputRef}>
      <label
        htmlFor={name}
        className={`absolute text-admin-grey-500 transition-all ${open || inputValue ? "-top-5 text-xs " : "pl-3 text-base top-2"} ${labelClassName}`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        onClick={clickHandler}
        className={`rounded-xl w-full px-3 py-2 outline-none hover:shadow-md shadow-admin-secondary-dark transition-all text-base capitalize focus:shadow-md ${
          open ? "cursor-text" : "cursor-pointer"
        } ${inputClassName}`}
        style={{ caretColor: "#697586" }}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
