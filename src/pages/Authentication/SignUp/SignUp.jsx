import "pages/Authentication/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "customHooks";
import { Loader } from "components";

const SignUp = () => {
  const {
    authState: { isLoading },
    signupHandler,
  } = useAuth();

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

  return (
    <section className="main-section login-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="card-wrapper basic-card card-text-only">
          <div className="text-center text-danger">{signup.error}</div>

          <div>
            <div className="card-heading">Sign Up</div>
          </div>

          <div className="card-content">
            <form
              className="form-group"
              onSubmit={(e) => signupHandler(e, signup, setSignup)}
            >
              <div className="input-group input input-primary">
                <label className="input-label">
                  FirstName<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  name="firstName"
                  value={signup.input.firstName || ""}
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
                  name="lastName"
                  value={signup.input.lastName || ""}
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

              <button
                className={`btn btn-primary ${
                  signup.pwdMatch ? "" : "btn-disabled"
                }`}
                type="submit"
                disabled={!signup.pwdMatch}
              >
                Create New Account
              </button>
            </form>
          </div>

          <div className="card-action">
            <span>Already have an account? </span>
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export { SignUp };
