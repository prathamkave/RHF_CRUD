import React from "react";
import img from "../assets/cafe.avif";
import { RiArrowRightLine } from "@remixicon/react";

const Nav = () => {
  return (
    <nav className="w-full px-4 sm:px-6 lg:px-10 py-2 border-b border-[#E4DFD8]/15 bg-[#24221B]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          src={img}
          alt="Meetmax"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold text-base lg:text-lg text-[#E4DFD8]">
          <p className="cursor-pointer hover:text-[#F2D04E] transition-colors">
            Home
          </p>
          <p className="cursor-pointer hover:text-[#F2D04E] transition-colors">
            About
          </p>
          <p className="cursor-pointer hover:text-[#F2D04E] transition-colors">
            Contact
          </p>
        </div>

        {/* Button */}
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#d8d6cf] text-[#24221B] font-semibold hover:bg-[#aba692] transition-all duration-300 active:scale-95">
          <span className="hidden sm:inline">Explore More</span>
          <RiArrowRightLine size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
