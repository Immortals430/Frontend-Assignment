import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_USER } from "../../redux/reducers/github_reducer";
import GitHubNavbar from "../../Components/GithubNavbar/GithubNavbar";
import "./Githubpage.css";
import Component from "./Component";

export default function GitHubpage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  // search user
  const searchUser = (e) => {
    e.preventDefault();
    setError(false);
    if (e.target.username.value === "")
      throw new Error("Please enter a username");

    setLoading(true);

    fetch(`https://api.github.com/users/${e.target.username.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 404) throw new Error("No user found");
        dispatch(
          UPDATE_USER({
            avatar: data.avatar_url,
            username: data.login,
            name: data.name,
            bio: data.bio,
            location: data.location,
            followers: data.followers,
            repos: data.public_repos,
          })
        );
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <main className="githubpage">
      <GitHubNavbar searchUser={searchUser} />
      <Component loading={loading} error={error} />
    </main>
  );
}
