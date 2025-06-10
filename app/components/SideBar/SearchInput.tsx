"use client";
import React from "react";
import { useState } from "react";


const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
          <div className="flex items-center bg-[#FFF0D9] border border-[#B9B18D] rounded-lg overflow-hidden mb-4">
          <div className="bg-[#96A882] p-4 flex items-center justify-center rounded-l-lg">
            <img
              src="/mainStories/search.gif"
              alt="Search"
              className="w-6 h-6"
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 bg-[#FFF0D9] text-sm focus:outline-none"
          />
        </div>

  );
};

export default SearchInput;
