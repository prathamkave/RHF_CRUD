import { RiSearchLine } from "@remixicon/react";

const SearchBar = ({ setToggle }) => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex items-center gap-2 rounded-lg  border  border-[#E4DFD8]/20 focus:outline-none focus:ring-0 focus:border-[#F2D04E] px-4 py-2">
        <RiSearchLine color="#E4DFD8" />
        <input
          type="text"
          placeholder="Search..."
          className=" w-full p-2 rounded text-[#E4DFD8] outline-none"
        />
      </div>
      <button
        onClick={() => setToggle(true)}
        className="p-2 text-[#24221B] text-base font-bold tracking-wide rounded-lg bg-[#F2D04E] hover:bg-[#E5C138] cursor-pointer"
      >
        Create User
      </button>
    </div>
  );
};

export default SearchBar;
