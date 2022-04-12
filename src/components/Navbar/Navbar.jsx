import "./Navbar.css";
import { Link } from "react-router-dom";
import { SearchBar } from "components";
import { useAuth } from "contexts";
import { authActions } from "reducers";

const Navbar = () => {
  const {
    authState: { isAuth },
    dispatchAuth,
  } = useAuth();
  const { SET_AUTH } = authActions;

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
            to="/"
            className="icon logout"
            title="Logout"
            onClick={() => {
              localStorage.removeItem("VL_token");
              localStorage.setItem("VL_isAuth", false);
              dispatchAuth({
                type: SET_AUTH,
                payload: { isAuth: false },
              });
            }}
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
