import { useContext } from "react";
import { PlaylistsContext } from "contexts";
import {
  addNewPlaylistService,
  deletePlaylistService,
  addVideoToPlaylistService,
  deleteVideoFromPlaylistService,
} from "services";
import { useAuth } from "customHooks";
import { playlistActions } from "reducers";

const usePlaylists = () => {
  const { playlistsState, dispatchPlaylists } = useContext(PlaylistsContext);

  const {
    authState: { token },
  } = useAuth();

  const { GET_PLAYLISTS, ADD_VIDEO_TO_PLAYLIST, DELETE_VIDEO_FROM_PLAYLIST } =
    playlistActions;

  const createNewPlaylist = async ({ newPlaylistName, video }) => {
    try {
      const { data, status } = await addNewPlaylistService({
        token,
        newPlaylistName,
      });

      if (status === 201) {
        dispatchPlaylists({
          type: GET_PLAYLISTS,
          payload: { playlists: data.playlists },
        });

        if (video)
          addVideoToPlaylist({
            playlist: data.playlists[data.playlists.length - 1],
            video,
          });
      }
    } catch (err) {
      console.error(err.response);
    }
  };

  const addVideoToPlaylist = async ({ playlist, video }) => {
    try {
      const { data, status } = await addVideoToPlaylistService({
        token,
        playlist,
        video,
      });

      if (status === 201) {
        dispatchPlaylists({
          type: ADD_VIDEO_TO_PLAYLIST,
          payload: { playlist: data.playlist },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteVideoFromPlaylist = async ({ videoInPlaylist, playlist }) => {
    try {
      const { data, status } = await deleteVideoFromPlaylistService({
        token,
        playlist,
        videoInPlaylist,
      });

      if (status === 200) {
        dispatchPlaylists({
          type: DELETE_VIDEO_FROM_PLAYLIST,
          payload: { playlist: data.playlist },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      const { data, status } = await deletePlaylistService({
        token,
        playlistId,
      });

      if (status === 200) {
        dispatchPlaylists({
          type: GET_PLAYLISTS,
          payload: { playlists: data.playlists },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    playlistsState,
    dispatchPlaylists,
    createNewPlaylist,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
    deletePlaylist,
  };
};

export { usePlaylists };
