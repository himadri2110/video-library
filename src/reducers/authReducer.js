import { authActions } from "./actionTypes";

const { SET_TOKEN, SET_AUTH } = authActions;

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload.token };
    case SET_AUTH:
      return { ...state, isAuth: payload.isAuth };
    default:
      return state;
  }
};

export { authReducer };
