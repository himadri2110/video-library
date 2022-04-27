const videoActions = {
  GET_VIDEOS: "GET_VIDEOS",
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
  SET_FILTER_TEXT: "SET_FILTER_TEXT",
  SET_SORT_BY: "SET_SORT_BY",
};

const authActions = {
  SET_TOKEN: "SET_TOKEN",
  SET_AUTH: "SET_AUTH",
};

const playlistActions = {
  GET_PLAYLISTS: "GET_PLAYLISTS",
  ADD_VIDEO_TO_PLAYLIST: "ADD_VIDEO_TO_PLAYLIST",
  DELETE_VIDEO_FROM_PLAYLIST: "DELETE_VIDEO_FROM_PLAYLIST",
};

const watchLaterActions = {
  GET_WATCHLATER: "GET_WATCHLATER",
};

const likesActions = {
  GET_LIKES: "GET_LIKES",
};

const historyActions = {
  GET_HISTORY: "GET_HISTORY",
};

export {
  videoActions,
  authActions,
  playlistActions,
  watchLaterActions,
  likesActions,
  historyActions,
};
