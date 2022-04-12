import axios from "axios";

const loginService = (loginInput) => {
  return axios.post("/api/auth/login", loginInput);
};

const signupService = (signupInput) => {
  return axios.post("/api/auth/signup", signupInput);
};

export { loginService, signupService };
