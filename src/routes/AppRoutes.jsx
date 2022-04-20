import { Routes, Route, Navigate } from "react-router-dom";
import { RequiresAuth } from "routes/RequiresAuth";
import { Navbar } from "components";
import {
  Explore,
  Playlists,
  SingleVideo,
  SinglePlaylist,
  Login,
  Logout,
  SignUp,
} from "pages";

const AppRoutes = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:videoId" element={<SingleVideo />} />

        <Route element={<RequiresAuth />}>
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:playlistId" element={<SinglePlaylist />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export { AppRoutes };
