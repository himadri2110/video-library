import { actionTypes } from "./actionTypes";

const { GET_VIDEOS } = actionTypes;

const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_VIDEOS:
      return { ...state, videos: payload.videos };
    default:
      return state;
  }
};

export { videosReducer };
