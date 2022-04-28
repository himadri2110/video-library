import { likesActions } from "./actionTypes";

const { GET_LIKES, SET_LOADING } = likesActions;

const likesReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_LIKES:
      return { ...state, likes: payload.likes };
    case SET_LOADING:
      return { ...state, isLoading: payload };
  }
};

export { likesReducer };
