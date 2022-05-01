import { useContext } from "react";
import toast from "react-hot-toast";
import { HistoryContext } from "contexts";
import { useAuth } from "customHooks";
import {
  addToHistoryService,
  removeFromHistoryService,
  clearHistoryService,
} from "services";
import { historyActions } from "reducers";

const { GET_HISTORY, SET_LOADING } = historyActions;

const useHistory = () => {
  const { historyState, dispatchHistory } = useContext(HistoryContext);

  const {
    authState: { token },
  } = useAuth();

  const addVideoToHistory = async ({ video }) => {
    if (video) {
      try {
        const { data, status } = await addToHistoryService({ token, video });

        if (status === 201) {
          dispatchHistory({
            type: GET_HISTORY,
            payload: { history: data.history },
          });
        }
      } catch (err) {
        toast.error("Error occured. Try again later.");
        console.error(err);
      }
    }
  };

  const removeVideoFromHistory = async ({ video }) => {
    try {
      dispatchHistory({ type: SET_LOADING, payload: true });

      const { data, status } = await removeFromHistoryService({ token, video });

      if (status === 200) {
        toast.success("Removed from history");

        dispatchHistory({
          type: GET_HISTORY,
          payload: { history: data.history },
        });
      }
    } catch (err) {
      toast.error("Error occured. Try again later.");
      console.error(err);
    } finally {
      dispatchHistory({ type: SET_LOADING, payload: false });
    }
  };

  const clearHistory = async () => {
    try {
      dispatchHistory({ type: SET_LOADING, payload: true });

      const { data, status } = await clearHistoryService({ token });

      if (status === 200) {
        toast.success("History cleared");

        dispatchHistory({
          type: GET_HISTORY,
          payload: { history: data.history },
        });
      }
    } catch (err) {
      toast.error("Error occured. Try again later.");
      console.error(err);
    } finally {
      dispatchHistory({ type: SET_LOADING, payload: false });
    }
  };

  return {
    historyState,
    dispatchHistory,
    addVideoToHistory,
    removeVideoFromHistory,
    clearHistory,
  };
};

export { useHistory };
