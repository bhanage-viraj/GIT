// UserCard.jsx
import  "./UserCard.css";
const UserCard = ({ user, repos }) => {
    if (!user) return null;
  
    const formatNumber = (num) => num?.toLocaleString() || '0';
  
    return (
      <div className="user-card">
        <div className="user-profile">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <div className="user-info">
            <h2>{user.name || user.login}</h2>
            {user.bio && <p className="bio">{user.bio}</p>}
            <div className="stats">
              <div>
                <strong>{formatNumber(user.followers)}</strong>
                <span>Followers</span>
              </div>
              <div>
                <strong>{formatNumber(user.following)}</strong>
                <span>Following</span>
              </div>
              <div>
                <strong>{formatNumber(user.public_repos)}</strong>
                <span>Repos</span>
              </div>
            </div>
            <div className="contact">
              {user.location && <p>📍 {user.location}</p>}
              {user.email && <p>✉️ {user.email}</p>}
              {user.blog && (
                <a href={user.blog} target="_blank" rel="noopener noreferrer">
                  🌐 {user.blog}
                </a>
              )}
            </div>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
  
        {repos && repos.length > 0 && (
          <div className="repositories">
            <h3>Latest Repositories</h3>
            <div className="repo-grid">
              {repos.map((repo) => (
                <div key={repo.id} className="repo-card">
                  <div className="repo-header">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-name"
                    >
                      {repo.name}
                    </a>
                    <span className="repo-visibility">{repo.visibility}</span>
                  </div>
                  {repo.description && <p className="repo-description">{repo.description}</p>}
                  <div className="repo-stats">
                    <span>⭐ {formatNumber(repo.stargazers_count)}</span>
                    <span>🍴 {formatNumber(repo.forks_count)}</span>
                    {repo.language && <span className="language">{repo.language}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default UserCard;