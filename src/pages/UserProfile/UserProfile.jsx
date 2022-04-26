import "./UserProfile.css";
import { Sidebar } from "components";
import { useAuth } from "customHooks";
import { profileAvatar } from "utils/getProfileAvatar";

const UserProfile = () => {
  const { logoutHandler } = useAuth();
  const user = JSON.parse(localStorage.getItem("VL_user"));

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container profile-container">
        <div className="profile-details">
          <img
            src={profileAvatar(user.firstName, user.lastName)}
            alt={fullName}
          />

          <div className="profile-creds">
            <p className="user-name">{fullName}</p>
            <p className="user-email">{user.email}</p>
          </div>
        </div>

        <button className="btn btn-secondary" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </section>
  );
};

export { UserProfile };
