import { authActions } from "./actionTypes";

const { SET_TOKEN, SET_AUTH, SET_LOADING } = authActions;

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload.token };
    case SET_AUTH:
      return { ...state, isAuth: payload.isAuth };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

export { authReducer };
