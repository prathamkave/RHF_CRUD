const SearchBar = ({ setToggle }) => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-[30%] p-2 rounded border text-[#E4DFD8] border-[#E4DFD8]/20 focus:outline-none focus:ring-0 focus:border-[#F2D04E]"
      />

      <button
        onClick={() => setToggle(true)}
        className="p-2 text-[#24221B] text-base font-bold tracking-wide rounded-lg bg-[#F2D04E] hover:bg-[#E5C138]"
      >
        Create User
      </button>
    </div>
  );
};

export default SearchBar;
