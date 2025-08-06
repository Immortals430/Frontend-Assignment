import { useDispatch } from "react-redux";
import "./GitHubNavbar.css"

export default function GitHubNavbar({ searchUser }) {
  
  return (
    <nav className="github-nav">
      <div>
        <h1>Github Users</h1>
      </div>
      <div className="github-nav-search">
        <form onSubmit={searchUser}>
          <input type="text" name="username" placeholder="Enter Username" />
          <button>Search</button>
        </form>
      </div>
    </nav>
  );
}
