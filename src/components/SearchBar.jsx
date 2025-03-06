// SearchBar.jsx - with improved UI
import { useState } from "react";
import "./SearchBar.css";

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
        aria-label="GitHub username"
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;