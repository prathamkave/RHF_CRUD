import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const SearchBar = () => {
  return (
    <div>
        <div className="flex gap-2 justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-[30%] p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <button className="p-2 bg-blue-700 text-white cursor-pointer rounded">
        <div className="flex gap-2 items-center">
          Create-User
        </div>
      </button>

        </div>
    </div>
  );
};

export default SearchBar;
