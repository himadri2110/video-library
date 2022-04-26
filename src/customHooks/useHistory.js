import { useContext } from "react";
import { HistoryContext } from "contexts";
import { useAuth } from "customHooks";
import {
  addToHistoryService,
  removeFromHistoryService,
  clearHistoryService,
} from "services";
import { historyActions } from "reducers";

const { GET_HISTORY } = historyActions;

const useHistory = () => {
  const { historyState, dispatchHistory } = useContext(HistoryContext);

  const {
    authState: { token },
  } = useAuth();

  const addVideoToHistory = async ({ video }) => {
    try {
      const { data, status } = await addToHistoryService({ token, video });

      if (status === 201) {
        dispatchHistory({
          type: GET_HISTORY,
          payload: { history: data.history },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeVideoFromHistory = async ({ video }) => {
    try {
      const { data, status } = await removeFromHistoryService({ token, video });

      if (status === 200) {
        dispatchHistory({
          type: GET_HISTORY,
          payload: { history: data.history },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const clearHistory = async () => {
    try {
      const { data, status } = await clearHistoryService({ token });

      if (status === 200) {
        dispatchHistory({
          type: GET_HISTORY,
          payload: { history: data.history },
        });
      }
    } catch (err) {
      console.error(err);
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
