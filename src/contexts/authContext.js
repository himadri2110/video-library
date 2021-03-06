import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "reducers";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, dispatchAuth] = useReducer(authReducer, {
    token: localStorage.getItem("VL_token") || "",
    isAuth: JSON.parse(localStorage.getItem("VL_isAuth")) || false,
    isLoading: false,
  });

  return (
    <AuthContext.Provider value={{ authState, dispatchAuth, navigate }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
