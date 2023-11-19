"use client";
import { useState, useEffect, useRef, MouseEventHandler } from "react";
import IconButton from "@/ui/icon-button";
import DatabasePlusIcon from "@/icons/admin/database-plus";

type InputProps = {
  type: "single" | "multi";
  label: string;
  name: string;
  onChange: (e: any) => void;
  fetchFunction?: () => Promise<any>;
  ifNot?: string;
};

const AutoComplete = ({ label, name, onChange, fetchFunction, ifNot }: InputProps) => {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const inputRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const loading = isOpen && data.length === 0;

  useEffect(() => {
    if (selected > filteredData.length) setSelected(filteredData.length - 1);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      const inputElement = inputRef.current?.querySelector("input");
      switch (event.key) {
        case "ArrowUp":
          setSelected((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "ArrowDown":
          setSelected((prev) => (prev < filteredData.length - 1 ? prev + 1 : prev));
          break;
        case "Enter":
          onChange({ name: name, data: filteredData[selected] });
          setInputValue(filteredData[selected].name);
          inputElement?.blur();
          setIsOpen(false);
          break;
        case "Escape":
          inputElement?.blur();
          setIsOpen(false);
          break;
        default:
          break;
      }
    };

    itemRefs.current[selected]?.scrollIntoView({ behavior: "smooth", block: "nearest" });

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, filteredData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef?.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clickHandler = () => {
    setIsOpen(true);
    if (data.length === 0) fetchData();
  };

  const menuClickHandler = (item: MouseEventHandler<HTMLDivElement>) => {
    setInputValue(item.name);
    setIsOpen(false);
    onChange({ name: name, data: item });
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
      const filteredData = data.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredData(filteredData);
      filteredData.length > 0 && onChange({ name: name, data: filteredData[0] });
    }, 200);
  };

  const fetchData = async () => {
    if (!fetchFunction) return;

    if (data.length === 0) {
      const response = await fetchFunction();
      if (response.message) {
        setError(response.message);
      } else {
        setError("");
        setData(response);
        setFilteredData(response);
      }
    }
  };

  return (
    <div ref={inputRef}>
      <div className="relative flex items-center overflow-hidden rounded-xl">
        <label
          htmlFor={name}
          className={`absolute text-admin-grey-500 transition-all ${isOpen || inputValue ? "-top-5 text-xs " : "pl-3 text-base top-2"}`}
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
          className={` w-full pl-3 pr-8 py-2 outline-none hover:shadow-md shadow-admin-secondary-dark transition-all text-base capitalize focus:shadow-md ${
            isOpen ? "cursor-text" : "cursor-pointer"
          }`}
          style={{ caretColor: "#697586" }}
          autoComplete="off"
        />
        {filteredData.length === 0 && inputValue && ifNot && (
          <IconButton href={ifNot} className="absolute right-0 rounded-none h-full !w-12">
            <DatabasePlusIcon />
          </IconButton>
        )}
        {loading && (
          <div className="w-5 h-5 rounded-full animate-spin border border-solid border-admin-grey-700 border-t-transparent shadow-sm absolute right-3" />
        )}
      </div>
      {isOpen && !loading && (
        <div
          className="input-scroolbar rounded-xl cursor-pointer bg-white w-full mt-2 px-2 shadow-md py-2 overflow-y-auto max-h-[13.5rem]"
          style={{ scrollPadding: "8px" }}
        >
          {filteredData.map((item, index) => (
            <div
              ref={(el) => (itemRefs.current[index] = el)}
              key={item.id}
              onClick={() => menuClickHandler(item)}
              className={`hover:bg-admin-grey-100 px-2 py-2 transition-all rounded-md text-admin-grey-700 hover:text-admin-grey-900 w-full ${
                selected == index ? "!bg-admin-grey-100" : ""
              }`}
            >
              {item.name}
            </div>
          ))}
          {filteredData.length === 0 && <div className="px-2 py-2 rounded-md text-admin-grey-700/50 w-full ">No match found</div>}
          {error && <div className="px-2 py-2 rounded-md text-admin-grey-700 w-full ">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
