import { useContext } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "contexts";
import { loginService, signupService } from "services";
import { authActions } from "reducers";

const useAuth = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { authState, dispatchAuth, navigate } = useContext(AuthContext);
  const { SET_TOKEN, SET_AUTH, SET_LOADING } = authActions;

  const loginHandler = async (e, login, setLogin) => {
    e.preventDefault();

    try {
      dispatchAuth({ type: SET_LOADING, payload: true });

      const { data, status } = await loginService(login.input);

      if (status === 200) {
        dispatchAuth({
          type: SET_TOKEN,
          payload: { token: data.encodedToken },
        });
        dispatchAuth({
          type: SET_AUTH,
          payload: { isAuth: true },
        });

        localStorage.setItem("VL_isAuth", true);
        localStorage.setItem("VL_token", data.encodedToken);
        localStorage.setItem("VL_user", JSON.stringify(data.foundUser));

        toast.success(`Welcome back, ${data.foundUser.firstName}!`, {
          icon: "👋",
        });

        navigate(from, { replace: true });
      }
    } catch (err) {
      setLogin({ ...login, error: err.response.data.errors[0] });
    } finally {
      dispatchAuth({ type: SET_LOADING, payload: false });
    }
  };

  const signupHandler = async (e, signup, setSignup) => {
    e.preventDefault();

    try {
      dispatchAuth({ type: SET_LOADING, payload: true });

      const { data, status } = await signupService(signup.input);

      if (status === 201) {
        localStorage.setItem("VL_isAuth", true);
        localStorage.setItem("VL_token", data.encodedToken);
        localStorage.setItem("VL_user", JSON.stringify(data.createdUser));

        dispatchAuth({
          type: SET_TOKEN,
          payload: { token: data.encodedToken },
        });
        dispatchAuth({
          type: SET_AUTH,
          payload: { isAuth: true },
        });

        toast.success(`Hi, ${data.createdUser.firstName}!`, {
          icon: "👋",
        });

        navigate(from, { replace: true });
      }
    } catch (err) {
      setSignup({ ...signup, error: err.response.data.errors[0] });
    } finally {
      dispatchAuth({ type: SET_LOADING, payload: false });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("VL_token");
    localStorage.removeItem("VL_user");
    localStorage.setItem("VL_isAuth", false);
    dispatchAuth({
      type: SET_AUTH,
      payload: { isAuth: false },
    });
    navigate("/logout");
  };

  return {
    navigate,
    authState,
    dispatchAuth,
    loginHandler,
    signupHandler,
    logoutHandler,
  };
};

export { useAuth };
