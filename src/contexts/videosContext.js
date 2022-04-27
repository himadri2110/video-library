import { createContext, useContext, useEffect, useReducer } from "react";
import { videosReducer, videoActions } from "reducers";
import { getVideoService } from "services";

const { GET_VIDEOS } = videoActions;

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videosState, dispatchVideo] = useReducer(videosReducer, {
    videos: [],
    searchText: "",
    filterText: "All",
    sortBy: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await getVideoService();

        if (status === 200) {
          dispatchVideo({
            type: GET_VIDEOS,
            payload: { videos: data.videos },
          });
        }
      } catch (err) {
        console.error(err);
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
