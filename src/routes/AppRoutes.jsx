import { Routes, Route, Navigate } from "react-router-dom";
import { RequiresAuth } from "routes/RequiresAuth";
import { Navbar } from "components";
import { Explore, Playlists, Login, Logout, SignUp } from "pages";

const AppRoutes = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/playlists"
          element={
            <RequiresAuth>
              <Playlists />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export { AppRoutes };
