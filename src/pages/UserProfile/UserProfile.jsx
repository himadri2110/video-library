import "./UserProfile.css";
import { Sidebar } from "components";
import { useAuth } from "customHooks";

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
            src={`https://avatars.dicebear.com/api/initials/${user.firstName}%20${user.lastName}.svg?b=%238553fa&r=50&size=80&fontSize=40`}
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
