"use client";
import React from "react";

const SearchBox = () => {
  return (
    <div
      className="absolute opacity-0 animate-opacityFast z-10 top-[3.25rem] md:top-14 p-5 
      text-center text-sm drop-shadow-lg bg-white w-full min-h rounded-b-lg
     text-lightDark border border-t-2 border-t-yellow border-gray 
      before:content-[''] before:absolute before:-top-2 before:left-1/2 
      before:-translate-x-1/2 before:border-x-[6px] before:border-x-transparent 
      before:border-b-[6px] before:border-b-yellow"
    >
      No result found for your search.
    </div>
  );
};

export default SearchBox;
