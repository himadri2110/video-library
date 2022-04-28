import { createContext, useEffect, useReducer } from "react";
import { playlistsReducer, playlistActions } from "reducers";
import { getPlaylistsService } from "services";
import { useAuth } from "customHooks";

const { GET_PLAYLISTS, SET_LOADING } = playlistActions;

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const {
    authState: { token, isAuth },
  } = useAuth();

  const [playlistsState, dispatchPlaylists] = useReducer(playlistsReducer, {
    playlists: [],
    isLoading: false,
  });

  useEffect(() => {
    isAuth &&
      (async () => {
        try {
          dispatchPlaylists({ type: SET_LOADING, payload: true });

          const { data, status } = await getPlaylistsService(token);

          if (status === 200) {
            dispatchPlaylists({
              type: GET_PLAYLISTS,
              payload: { playlists: data.playlists },
            });
          }
        } catch (err) {
          console.error(err);
        } finally {
          dispatchPlaylists({ type: SET_LOADING, payload: false });
        }
      })();
  }, [token]);

  return (
    <PlaylistsContext.Provider value={{ playlistsState, dispatchPlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

export { PlaylistsProvider, PlaylistsContext };
