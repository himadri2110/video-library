import { useAuth } from "customHooks";

import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const location = useLocation();

  const {
    authState: { isAuth },
  } = useAuth();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
