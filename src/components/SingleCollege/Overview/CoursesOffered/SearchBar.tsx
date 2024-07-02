// components/SearchBar.tsx
import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Select courses"
        className="w-full p-2 bg-gray-100 rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
