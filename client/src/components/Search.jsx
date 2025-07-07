import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Notes..."
        value={searchTerm}
        className="p-2 rounded-md border border-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default Search;
