import { Link } from "react-router-dom";
import AquaMarineButton from "../../Components/Buttons/AquaMarineButtons.jsx/AquaMarineButton";
import BlueButton from "../../Components/Buttons/BlueButton.jsx/BlueButton";
import "./Homepage.css";

// homepage
export default function Hompage() {
  return (
    <main className="homepage">
      <h1 className="title">
        Welcome to Frontend Developer Internship – Assignment
      </h1>
      <div className="btn-container">
        <Link to={"/todo"}>
          <AquaMarineButton label={"Todo"} />
        </Link>
        <Link to={"/github"}>
          <BlueButton label={"Github"} />
        </Link>
      </div>
    </main>
  );
}
