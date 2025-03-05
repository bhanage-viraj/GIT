// src/components/SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
