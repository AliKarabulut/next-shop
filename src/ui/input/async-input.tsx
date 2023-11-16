"use client";
import { useState, useEffect, useRef } from "react";
import IconButton from "@/ui/icon-button";
import DatabasePlusIcon from "@/icons/admin/database-plus";

type InputProps = {
  type: "single" | "multi";
  label: string;
  name: string;
  onChange: (e: any) => void;
  fetchFunction?: () => Promise<any>;
  postFunction?: (name: string) => Promise<any>;
};

const AsyncInput = ({ label, name, onChange, fetchFunction, postFunction }: InputProps) => {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [selected, setSelected] = useState<number>(0);
  const inputRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      switch (event.key) {
        case "ArrowUp":
          setSelected((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "ArrowDown":
          setSelected((prev) => (prev < data.length - 1 ? prev + 1 : prev));
          break;
        case "Enter":
          onChange({ name: name, data: data[selected] });
          setInputValue(data[selected].name);
          setOpen(false);
          break;
        default:
          break;
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef?.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, selected]);

  const clickHandler = () => {
    setOpen(true);
    fetchData();
  };

  const timerId = useRef<NodeJS.Timeout | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (loading) return;
    const inputValue = e.target.value;
    setInputValue(inputValue);
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      setFilteredData(data.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase())));
    }, 200);
  };

  const fetchData = async () => {
    if (!fetchFunction) return;

    if (data.length === 0) {
      setLoading(true);
      const response = await fetchFunction();
      setLoading(false);
      if (response.message) {
        setError(response.message);
      } else {
        setError("");
        setData(response);
        setFilteredData(response);
      }
    }
  };

  const postData = async () => {
    if (!postFunction) return;

    setLoading(true);
    const response = await postFunction(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
    if (response.message) {
      setError(response.message);
    } else {
      setError("");
      setData([...data, response]);
      onChange({ name: name, data: response });
    }
    setLoading(false);
  };

  useEffect(() => {
    itemRefs.current[selected]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selected]);
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
        {!filteredData && (
          <IconButton onClick={postData} disabled={loading}>
            <DatabasePlusIcon />
          </IconButton>
        )}
        {loading && filteredData && (
          <div className="w-5 h-5 rounded-full animate-spin border border-solid border-admin-grey-700 border-t-transparent shadow-sm absolute right-3" />
        )}
        {error && <div>{error}</div>}
      </div>
      {open && !loading && filteredData.length > 0 && (
        <div
          onClick={() => setOpen(false)}
          className="input-scroolbar rounded-xl cursor-pointer bg-white w-full mt-2 px-2 shadow-md py-2 overflow-y-auto max-h-[13.5rem] "
          style={{ scrollPadding: "8px" }}
        >
          {filteredData.map((item, index) => (
            <div
              ref={(el) => (itemRefs.current[index] = el)}
              key={item.id}
              onClick={() => setInputValue(item.name)}
              className={`hover:bg-admin-grey-100 px-2 py-2 transition-all rounded-md text-admin-grey-700 hover:text-admin-grey-900 w-full ${
                selected == index ? "!bg-admin-grey-100" : ""
              }`}
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
