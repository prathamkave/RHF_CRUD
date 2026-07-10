import React from "react";
import SearchBar from "./SearchBar";

const Content = ({ setToggle }) => {
  return (
    <div className="px-10 h-[calc(100vh-150px)] bg-[#24221B]">
      <div className="mt-4">
        <SearchBar setToggle={setToggle} />
      </div>
    </div>
  );
};

export default Content;
