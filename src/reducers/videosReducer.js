import { videoActions } from "./actionTypes";

const { GET_VIDEOS } = videoActions;

const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_VIDEOS:
      return { ...state, videos: payload.videos };
    default:
      return state;
  }
};

export { videosReducer };
