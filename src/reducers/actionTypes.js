const videoActions = {
  GET_VIDEOS: "GET_VIDEOS",
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
  SET_FILTER_TEXT: "SET_FILTER_TEXT",
  SET_SORT_BY: "SET_SORT_BY",
  SET_LOADING: "SET_LOADING",
};

const authActions = {
  SET_TOKEN: "SET_TOKEN",
  SET_AUTH: "SET_AUTH",
  SET_LOADING: "SET_LOADING",
};

const playlistActions = {
  GET_PLAYLISTS: "GET_PLAYLISTS",
  ADD_VIDEO_TO_PLAYLIST: "ADD_VIDEO_TO_PLAYLIST",
  DELETE_VIDEO_FROM_PLAYLIST: "DELETE_VIDEO_FROM_PLAYLIST",
  SET_LOADING: "SET_LOADING",
};

const watchLaterActions = {
  GET_WATCHLATER: "GET_WATCHLATER",
  SET_LOADING: "SET_LOADING",
};

const likesActions = {
  GET_LIKES: "GET_LIKES",
  SET_LOADING: "SET_LOADING",
};

const historyActions = {
  GET_HISTORY: "GET_HISTORY",
  SET_LOADING: "SET_LOADING",
};

export {
  videoActions,
  authActions,
  playlistActions,
  watchLaterActions,
  likesActions,
  historyActions,
};
