import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useGitHubUser from "../hooks/useGitHubUser";
import RecentSearches from "../components/RecentSearches";

const Home = () => {
  const [username, setUsername] = useState("");
  const { user, repos, loading, error } = useGitHubUser(username);

  const handleSearch = (newUsername) => {
    if (!newUsername) return;
    setUsername(newUsername);

    // Add to recent searches
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    const updatedSearches = [
      newUsername,
      ...storedSearches.filter((search) => search !== newUsername),
    ].slice(0, 5);

    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <RecentSearches onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {user && <UserCard user={user} repos={repos} />}

      {!username && <p className="instruction">Enter a GitHub username to see their profile and repositories.</p>}
    </div>
  );
};

export default Home;
