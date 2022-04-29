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
  WatchLater,
  Likes,
  History,
  UserProfile,
  Home,
} from "pages";

const AppRoutes = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:videoId" element={<SingleVideo />} />

        <Route element={<RequiresAuth />}>
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:playlistId" element={<SinglePlaylist />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<UserProfile />} />
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
