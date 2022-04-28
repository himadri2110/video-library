import { createContext, useEffect, useReducer } from "react";
import { getHistoryService } from "services";
import { historyReducer, historyActions } from "reducers";
import { useAuth } from "customHooks";

const HistoryContext = createContext();

const { GET_HISTORY, SET_LOADING } = historyActions;

const HistoryProvider = ({ children }) => {
  const {
    authState: { token, isAuth },
  } = useAuth();

  const [historyState, dispatchHistory] = useReducer(historyReducer, {
    history: [],
    isLoading: false,
  });

  useEffect(() => {
    isAuth &&
      (async () => {
        try {
          dispatchHistory({ type: SET_LOADING, payload: true });

          const { data, status } = await getHistoryService({ token });

          if (status === 200) {
            dispatchHistory({
              type: GET_HISTORY,
              payload: { history: data.history },
            });
          }
        } catch (err) {
          console.error(err);
        } finally {
          dispatchHistory({ type: SET_LOADING, payload: false });
        }
      })();
  }, [token]);

  return (
    <HistoryContext.Provider value={{ historyState, dispatchHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryProvider, HistoryContext };
