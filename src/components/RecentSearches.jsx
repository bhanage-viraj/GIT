import { useEffect, useState } from "react";

const RecentSearches = ({ onSearch }) => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
  }, []);

  const addSearch = (username) => {
    if (!username) return;

    const updatedSearches = [
      username,
      ...recentSearches.filter((search) => search !== username),
    ].slice(0, 5);

    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSearchClick = (username) => {
    onSearch(username);
  };

  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      {recentSearches.length > 0 ? (
        <ul>
          {recentSearches.map((search, index) => (
            <li key={index} onClick={() => handleSearchClick(search)}>
              {search}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent searches found.</p>
      )}
    </div>
  );
};

export default RecentSearches;
