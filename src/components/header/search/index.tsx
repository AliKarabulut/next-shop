"use client"
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <form action="" className="flex items-center border-2 rounded-3xl border-yellow-500 overflow-hidden max-w-2xl w-full">
      <input type="text" className="focus:border-none focus:outline-none text-sm w-full py-2.5 pl-4 placeholder:text-gray-500" placeholder="Ara"/>
      <button className="h-10 w-14 bg-yellow-500 flex items-center justify-end pr-4 cursor-pointer hover:bg-gray-800 duration-300 group" type="submit">
        <BsSearch className="text-xl fill-black-70 group-hover:fill-white duration-300" />
      </button>
    </form>
  );
};

export default Search;
