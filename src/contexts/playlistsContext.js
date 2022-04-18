import { createContext, useEffect, useReducer } from "react";
import { playlistsReducer, playlistActions } from "reducers";
import { getPlaylistsService } from "services";
import { useAuth } from "customHooks";

const { GET_PLAYLISTS } = playlistActions;

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const {
    authState: { token, isAuth },
  } = useAuth();

  const [playlistsState, dispatchPlaylists] = useReducer(playlistsReducer, {
    playlists: [],
  });

  useEffect(() => {
    isAuth &&
      (async () => {
        try {
          const { data, status } = await getPlaylistsService(token);

          if (status === 200) {
            dispatchPlaylists({
              type: GET_PLAYLISTS,
              payload: { playlists: data.playlists },
            });
          }
        } catch (err) {
          console.error(err);
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
