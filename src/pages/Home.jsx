import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useGitHubUser from "../hooks/useGitHubUser";

const Home = () => {
  const [username, setUsername] = useState("");
  const { user, loading, error } = useGitHubUser(username);

  return (
    <div className="home">
      <SearchBar onSearch={setUsername} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default Home;