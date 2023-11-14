"use client";
import { useState, useEffect, useRef, FC } from "react";
import IconButton from "@/ui/icon-button";
import DatabasePlusIcon from "@/icons/admin/database-plus";

type InputProps = {
  type: "single" | "multi";
  label: string;
  name: string;
  onChange: (e: any) => void;
  fetchFunction: () => Promise<any>;
};

const AsyncInput = ({ label, name, onChange, fetchFunction }: InputProps) => {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [isMatching, setIsMatching] = useState<any>(true);

  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  const fetchData = async () => {
    if (data.length === 0) {
      setLoading(true);
      const response = await fetchFunction();
      setLoading(false);
      if (response.message) {
        setError(response.message);
      } else {
        setError("");
        setData(response);
      }
    }
  };

  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(true);
    fetchData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (loading) return;
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const matchingCategory = data.find((category) => category.name.toLowerCase().includes(inputValue.toLowerCase()));
    console.log(matchingCategory);
    setIsMatching(!!matchingCategory);
    console.log(isMatching);
    if (matchingCategory) {
      onChange({ name: name, value: matchingCategory });
    }
  };

  return (
    <div className="w-fit" ref={inputRef}>
      <div className="relative w-fit  gap-2  flex items-center">
        <label
          htmlFor={name}
          className={`absolute text-admin-grey-500 transition-all ${open || inputValue ? "-top-5 text-xs " : "pl-3 text-base top-2"}`}
        >
          {label}
        </label>
        <input
          type="text"
          name={name}
          id={name}
          value={inputValue}
          onChange={handleChange}
          onClick={clickHandler}
          className={`rounded-xl pl-3 pr-8 py-2 outline-none hover:shadow-md shadow-admin-secondary-dark transition-all text-base capitalize focus:shadow-md ${
            open ? "cursor-text" : "cursor-pointer"
          }`}
          style={{ caretColor: "#697586" }}
          autoComplete="off"
        />
        {!isMatching && (
          <IconButton>
            <DatabasePlusIcon />
          </IconButton>
        )}
        {loading && (
          <div className="w-5 h-5 rounded-full animate-spin border border-solid border-admin-grey-700 border-t-transparent shadow-sm absolute right-3" />
        )}
      </div>
      {open && !loading && isMatching && (
        <div onClick={() => setOpen(false)} className="rounded-xl cursor-pointer bg-white w-full mt-2 px-2 shadow-md py-2">
          {error && <div>{error}</div>}
          {data
            ?.filter((e) => e.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map((category) => (
              <div
                key={category.id}
                onClick={() => setInputValue(category.name)}
                className="hover:bg-admin-grey-100 px-2 py-2 transition-all rounded-md text-admin-grey-700 hover:text-admin-grey-900"
              >
                {category.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default AsyncInput;
