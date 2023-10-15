"use client"
import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <form action="" className="flex items-center border-2 rounded-2xl border-yellow-500 overflow-hidden">
      <input type="text" className="focus:border-none focus:outline-none text-sm w-full py-2.5 pl-4" />
      <div className="h-10 w-14 bg-yellow-500 flex items-center justify-end pr-4">
        <BsSearch className="text-xl" />
      </div>
    </form>
  );
};

export default Search;
