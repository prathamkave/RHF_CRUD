import React from "react";
import SearchBar from "./SearchBar";

const Content = () => {
  return (
    <div className="px-10 h-[calc(100vh-150px)] border border-amber-200 bg-amber-500">
      <div className="mt-4">
        <SearchBar />
      </div>
    </div>
  );
};

export default Content;
