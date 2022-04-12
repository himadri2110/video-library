import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="aside">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-compass"></i> Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-folder-plus"></i> Playlists
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/likes"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-thumbs-up"></i> Liked Videos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlater"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-clock"></i> Watch later
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <i className="fa-solid fa-clock-rotate-left"></i> History
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
