import { videoActions } from "./actionTypes";

const { GET_VIDEOS, SET_SEARCH_TEXT, SET_FILTER_TEXT, SET_SORT_BY } =
  videoActions;

const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_VIDEOS:
      return { ...state, videos: payload.videos };
    case SET_SEARCH_TEXT:
      return { ...state, searchText: payload.searchText };
    case SET_FILTER_TEXT:
      return { ...state, filterText: payload.filterText };
    case SET_SORT_BY:
      return { ...state, sortBy: payload.sortBy };
    default:
      return state;
  }
};

export { videosReducer };
