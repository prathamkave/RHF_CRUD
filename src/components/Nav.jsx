import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const Nav = () => {
  return (
    <div className="px-5 py-2 border border-[#E4DFD8]/15 bg-[#24221B] flex justify-between items-center">
      <div>
        <img
          className="rounded-full w-15"
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
          alt="logo"
        />
      </div>
      <div className="flex font-semibold gap-4">
        <p className="hover:scale-105 cursor-pointer text-[#E4DFD8]">Home</p>
        <p className="hover:scale-105 cursor-pointer text-[#E4DFD8]">About</p>
        <p className="hover:scale-105 cursor-pointer text-[#E4DFD8]">Contact</p>
      </div>
      <button className="p-2  text-[#24221B] text-base font-bold tracking-wide rounded-lg bg-[#d8d6cf] hover:bg-[#aba692] focus:outline-none focus:ring-2 focus:ring-[#F2D04E]/40 transition-all  duration-300 active:scale-[0.98] cursor-pointer">
        <div className="flex gap-2 items-center">
          Explore <RiArrowRightLine />
        </div>
      </button>
    </div>
  );
};

export default Nav;
