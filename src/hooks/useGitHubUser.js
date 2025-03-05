import { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_ACCESS_TOKEN,
});

const useGitHubUser = (username) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await octokit.request("GET /users/{username}", {
          username,
          headers: { "X-GitHub-Api-Version": "2022-11-28" },
        });

        // Fetch repositories
        const reposResponse = await octokit.request("GET /users/{username}/repos", {
          username,
          headers: { "X-GitHub-Api-Version": "2022-11-28" },
          sort: "updated",
          per_page: 10,
        });

        if (isMounted) {
          setUser(userResponse.data);
          setRepos(reposResponse.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || "Error fetching data");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [username]);

  return { user, repos, loading, error };
};

export default useGitHubUser;