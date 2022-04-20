import { useAuth } from "customHooks";

import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiresAuth = () => {
  const location = useLocation();

  const {
    authState: { isAuth },
  } = useAuth();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
