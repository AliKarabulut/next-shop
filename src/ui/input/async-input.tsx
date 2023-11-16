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
  postFunction: (name: string) => Promise<any>;
};

const AsyncInput = ({ label, name, onChange, fetchFunction, postFunction }: InputProps) => {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [isMatching, setIsMatching] = useState<any>(true);

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
    fetchData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (loading) return;
    const inputValue = e.target.value;
    setInputValue(inputValue);
    const matchingData = data.find((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setIsMatching(!!matchingData);
    if (matchingData) {
      onChange({ name: name, data: matchingData });
    }
  };

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

  const postData = async () => {
    setLoading(true);
    const response = await postFunction(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    if (response.message) {
      setError(response.message);
    } else {
      setError("");
      setData([...data, response]);
      onChange({ name: name, data: response });
      setIsMatching(true);
    }
    setLoading(false);
  };

  return (
    <div ref={inputRef}>
      <div className="relative flex items-center">
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
          className={`rounded-xl w-full pl-3 pr-8 py-2 outline-none hover:shadow-md shadow-admin-secondary-dark transition-all text-base capitalize focus:shadow-md ${
            open ? "cursor-text" : "cursor-pointer"
          }`}
          style={{ caretColor: "#697586" }}
          autoComplete="off"
        />
        {!isMatching && (
          <IconButton onClick={postData} disabled={loading}>
            <DatabasePlusIcon />
          </IconButton>
        )}
        {loading && isMatching && (
          <div className="w-5 h-5 rounded-full animate-spin border border-solid border-admin-grey-700 border-t-transparent shadow-sm absolute right-3" />
        )}
        {error && <div>{error}</div>}
      </div>
      {open && !loading && isMatching && (
        <div
          onClick={() => setOpen(false)}
          className="input-scroolbar rounded-xl cursor-pointer bg-white w-full mt-2 px-2 shadow-md py-2 overflow-y-auto max-h-[13.5rem] "
        >
          {data
            ?.filter((e) => e.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item) => (
              <div
                key={item.id}
                onClick={() => setInputValue(item.name)}
                className="hover:bg-admin-grey-100 px-2 py-2 transition-all rounded-md text-admin-grey-700 hover:text-admin-grey-900 w-full"
              >
                {item.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default AsyncInput;
