import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "reducers";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, dispatchAuth] = useReducer(authReducer, {
    token: localStorage.getItem("VL_token") || "",
    isAuth: JSON.parse(localStorage.getItem("VL_isAuth")) || false,
  });

  return (
    <AuthContext.Provider value={{ authState, dispatchAuth, navigate }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
