import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const Nav = () => {
  return (
    <div className="px-5 py-2 border border-b-gray-100 bg-[#24221B] flex justify-between items-center">
      <div>
        <img
          className="rounded-full w-15"
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
          alt="logo"
        />
      </div>
      <div className="flex font-semibold gap-4">
        <p className="hover:underline cursor-pointer text-[#E4DFD8]">Home</p>
        <p className="hover:underline cursor-pointer text-[#E4DFD8]">About</p>
        <p className="hover:underline cursor-pointer text-[#E4DFD8]">Contact</p>
      </div>
      <button className="p-2 bg-blue-700 text-white cursor-pointer rounded">
        <div className="flex gap-2 items-center">
          Explore <RiArrowRightLine />
        </div>
      </button>
    </div>
  );
};

export default Nav;
