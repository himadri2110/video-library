import { createContext, useEffect, useReducer } from "react";
import { getHistoryService } from "services";
import { historyReducer, historyActions } from "reducers";
import { useAuth } from "customHooks";

const HistoryContext = createContext();

const { GET_HISTORY } = historyActions;

const HistoryProvider = ({ children }) => {
  const {
    authState: { token, isAuth },
  } = useAuth();

  const [historyState, dispatchHistory] = useReducer(historyReducer, {
    history: [],
  });

  useEffect(() => {
    isAuth &&
      (async () => {
        try {
          const { data, status } = await getHistoryService({ token });

          if (status === 200) {
            dispatchHistory({
              type: GET_HISTORY,
              payload: { history: data.history },
            });
          }
        } catch (err) {
          console.error(err);
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
