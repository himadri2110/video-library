import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "components";
import { Explore, Login, SignUp } from "pages";
import { useAuth } from "contexts";

const AppRoutes = () => {
  const {
    authState: { isAuth },
  } = useAuth();

  return (
    <div className="page-wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />

        {!isAuth ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export { AppRoutes };
