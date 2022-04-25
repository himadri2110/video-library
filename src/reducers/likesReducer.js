import { likesActions } from "./actionTypes";

const { GET_LIKES } = likesActions;

const likesReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_LIKES:
      return { ...state, likes: payload.likes };
  }
};

export { likesReducer };
