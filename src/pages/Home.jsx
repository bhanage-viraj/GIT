import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import useGitHubUser from "../hooks/useGitHubUser";

const Home = () => {
  const [username, setUsername] = useState("");
  const { user, repos, loading, error } = useGitHubUser(username);

  return (
    <div className="home">
      {/* SearchBar to input GitHub username */}
      <SearchBar onSearch={setUsername} />

      {/* Show loader while fetching data */}
      {loading && <Loader />}

      {/* Display error message if there's an error */}
      {error && <ErrorMessage message={error} />}

      {/* Display UserCard if user data is available */}
      {user && <UserCard user={user} repos={repos} />}

      {/* Show a message if no username is entered */}
      {!username && (
        <p className="instruction">
          Enter a GitHub username to see their profile and repositories.
        </p>
      )}
    </div>
  );
};

export default Home;