"use client";
import { BsSearch } from "react-icons/bs";
import SearchBox from "./searchBox";
import { useEffect, useRef, useState } from "react";

const Search = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form ref={searchRef} onSubmit={submitHandler} className="flex items-center border-2 rounded-3xl border-yellow max-w-2xl w-full relative">
      <input
        type="text"
        className="focus:border-none rounded-l-3xl focus:outline-none text-sm w-full py-2.5 pl-4 placeholder:text-gray-500"
        placeholder="Search"
        onClick={(e) => setIsOpen(prev=> !prev)}
      />
      <button
        className="h-10 w-14 bg-yellow flex items-center justify-end pr-4 cursor-pointer hover:bg-gray-800 duration-300 group rounded-r-2xl"
        type="submit"
      >
        <BsSearch className="text-xl fill-black-70 group-hover:fill-white duration-300" />
      </button>
      {isOpen && <SearchBox />}
    </form>
  );
};

export default Search;
