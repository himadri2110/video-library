import { createContext, useContext, useEffect, useReducer } from "react";
import { videosReducer, videoActions } from "reducers";
import { getVideoService } from "services";

const { GET_VIDEOS, SET_LOADING } = videoActions;

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videosState, dispatchVideo] = useReducer(videosReducer, {
    videos: [],
    searchText: "",
    filterText: "All",
    sortBy: "",
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      try {
        dispatchVideo({ type: SET_LOADING, payload: true });

        const { data, status } = await getVideoService();

        if (status === 200) {
          dispatchVideo({
            type: GET_VIDEOS,
            payload: { videos: data.videos },
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        dispatchVideo({ type: SET_LOADING, payload: false });
      }
    })();
  }, []);

  return (
    <VideosContext.Provider value={{ videosState, dispatchVideo }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext);

export { VideosProvider, useVideos };
