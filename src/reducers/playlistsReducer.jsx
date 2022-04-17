import { playlistActions } from "reducers";

const { GET_PLAYLISTS, ADD_VIDEO_TO_PLAYLIST, DELETE_VIDEO_FROM_PLAYLIST } =
  playlistActions;

const playlistsReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_PLAYLISTS:
      return { ...state, playlists: payload.playlists };

    case ADD_VIDEO_TO_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload.playlist._id ? payload.playlist : playlist
        ),
      };

    case DELETE_VIDEO_FROM_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload.playlist._id ? payload.playlist : playlist
        ),
      };

    default:
      return state;
  }
};

export { playlistsReducer };
