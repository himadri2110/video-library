import "./Navbar.css";
import { Link } from "react-router-dom";
import { SearchBar } from "components";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        <i className="fa-regular fa-circle-play"></i>{" "}
        <span className="text-grey">Code</span>Play
      </Link>

      <div className="nav-search input input-primary">
        <SearchBar />
      </div>

      <div className="nav-action">
        <Link to="/explore" className="nav-primary">
          <span>Explore</span>
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
