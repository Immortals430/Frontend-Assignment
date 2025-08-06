import { githubSelector } from "../../redux/reducers/github_reducer";
import { useSelector } from "react-redux";
import "./GitHubUserDetails.css"

export default function GitHubUserDetails() {
  const { user } = useSelector(githubSelector);

  return (
    <section className="user-details">
      <div>
        <img src={user.avatar} alt="avatar" width={300} height={300}  />
      </div>
      <div className="user-info">
        <h1 className="name">{user.name}</h1>
        <small className="username">{user.username}</small>
        <p>Bio: {user.bio || "N/A"}</p>
        <p>Location: {user.location || "N/A"}</p>
        <p>Followers: {user.followers || "N/A"}</p>
        <p>Public Repos: {user.public_repos || "0"}</p>
      </div>
    </section>
  );
}
