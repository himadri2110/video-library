import "./Navbar.css";
import { Link } from "react-router-dom";
import { SearchBar } from "components";
import { useAuth } from "customHooks";

const Navbar = () => {
  const {
    authState: { isAuth },
  } = useAuth();

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        <i className="fa-regular fa-circle-play"></i>
        <span className="text-grey">Code</span>Play
      </Link>

      <div className="nav-search input input-primary">
        <SearchBar />
      </div>

      <div className="nav-action">
        {isAuth ? (
          <Link to="/profile" title="Profile">
            <i className="fa-solid fa-user"></i>
          </Link>
        ) : (
          <Link to="/login" className="login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
