import "./Navbar.css";
import { Link } from "react-router-dom";
import { SearchBar } from "components";
import { useAuth } from "customHooks";

const Navbar = () => {
  const {
    authState: { isAuth },
    logoutHandler,
  } = useAuth();

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

        {isAuth ? (
          <Link
            to="/logout"
            className="icon logout"
            title="Logout"
            onClick={logoutHandler}
          >
            <i className="fa-solid fa-sign-out"></i>
            <span>Logout</span>
          </Link>
        ) : (
          <Link to="/login" className="icon login" title="Login">
            <i className="fa-solid fa-sign-in"></i>
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
