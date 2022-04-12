import "pages/Authentication/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "contexts";
import { authActions } from "reducers";
import { signupService } from "services";

const SignUp = () => {
  const { dispatchAuth, navigate } = useAuth();
  const { SET_TOKEN, SET_AUTH } = authActions;

  const [signup, setSignup] = useState({
    input: {},
    error: "",
    pwdMatch: true,
    hide: { pwd: true, confirmPwd: true },
  });

  const signupInputHandler = (e) => {
    const { name, value } = e.target;

    if (name === "confirmPwd") {
      setSignup({
        ...signup,
        input: { ...signup.input, [name]: value },
        pwdMatch: value === signup.input.password ? true : false,
      });
    } else {
      setSignup({ ...signup, input: { ...signup.input, [name]: value } });
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signupService(signup.input);

      localStorage.setItem("VL_isAuth", true);
      localStorage.setItem("VL_token", data.encodedToken);

      dispatchAuth({
        type: SET_TOKEN,
        payload: { token: data.encodedToken },
      });

      dispatchAuth({
        type: SET_AUTH,
        payload: { isAuth: true },
      });

      setSignup({ ...signup, input: "" });

      navigate("/");
    } catch (err) {
      setSignup({ ...signup, error: err.response.data.errors[0] });
    }
  };

  return (
    <section className="main-section login-container">
      <div className="card-wrapper basic-card card-text-only">
        <div className="text-center text-danger">{signup.error}</div>

        <div>
          <div className="card-heading">Sign Up</div>
        </div>

        <div className="card-content">
          <form className="form-group" onSubmit={signupHandler}>
            <div className="input-group input input-primary">
              <label className="input-label">
                FirstName<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Type here..."
                name="firstname"
                value={signup.input.firstname || ""}
                onChange={signupInputHandler}
                required
              />
            </div>

            <div className="input-group input input-primary">
              <label className="input-label">
                LastName<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Type here..."
                name="lastname"
                value={signup.input.lastname || ""}
                onChange={signupInputHandler}
                required
              />
            </div>

            <div className="input-group input input-primary">
              <label className="input-label">
                Email<span>*</span>
              </label>
              <input
                type="email"
                placeholder="Type here..."
                name="email"
                value={signup.input.email || ""}
                onChange={signupInputHandler}
                required
              />
            </div>

            <div className="input-group input input-primary">
              <label className="input-label">
                Password<span>*</span>
              </label>
              <div className="toggle-pwd">
                <input
                  type={`${signup.hide.pwd ? "password" : "text"}`}
                  placeholder="Type here..."
                  name="password"
                  value={signup.input.password || ""}
                  onChange={signupInputHandler}
                  required
                />
                <i
                  className={`fa-solid ${
                    signup.hide.pwd ? "fa-eye" : "fa-eye-slash"
                  }
                    `}
                  onClick={() =>
                    setSignup({
                      ...signup,
                      hide: { ...signup.hide, pwd: !signup.hide.pwd },
                    })
                  }
                ></i>
              </div>
            </div>

            <div className="input-group input input-primary">
              <label className="input-label">
                Confirm Password<span>*</span>
              </label>
              <div className="toggle-pwd">
                <input
                  type={`${signup.hide.confirmPwd ? "password" : "text"}`}
                  placeholder="Type here..."
                  name="confirmPwd"
                  value={signup.input.confirmPwd || ""}
                  onChange={signupInputHandler}
                  required
                />

                <i
                  className={`fa-solid ${
                    signup.hide.confirmPwd ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() =>
                    setSignup({
                      ...signup,
                      hide: {
                        ...signup.hide,
                        confirmPwd: !signup.hide.confirmPwd,
                      },
                    })
                  }
                ></i>
              </div>
              {!signup.pwdMatch ? (
                <div className="input-error-msg">Passwords do not match</div>
              ) : null}
            </div>

            {signup.pwdMatch ? (
              <button className="btn btn-primary" type="submit">
                Create New Account
              </button>
            ) : (
              <button
                className="btn btn-primary btn-disabled"
                type="submit"
                disabled
              >
                Create New Account
              </button>
            )}
          </form>
        </div>

        <div className="card-action">
          <span>Already have an account? </span>
          <Link to="/login" className="link">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export { SignUp };