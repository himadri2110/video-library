import { createContext, useEffect, useReducer } from "react";
import { watchLaterReducer, watchLaterActions } from "reducers";
import { getWatchLaterService } from "services";
import { useAuth } from "customHooks";

const WatchLaterContext = createContext();

const { GET_WATCHLATER } = watchLaterActions;

const WatchLaterProvider = ({ children }) => {
  const {
    authState: { token, isAuth },
  } = useAuth();

  const [watchLaterState, dispatchWatchLater] = useReducer(watchLaterReducer, {
    watchLater: [],
  });

  useEffect(() => {
    isAuth &&
      (async () => {
        try {
          const { data, status } = await getWatchLaterService({ token });

          if (status === 200) {
            dispatchWatchLater({
              type: GET_WATCHLATER,
              payload: { watchLater: data.watchlater },
            });
          }
        } catch (err) {
          console.error(err);
        }
      })();
  }, [token]);

  return (
    <WatchLaterContext.Provider value={{ watchLaterState, dispatchWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export { WatchLaterProvider, WatchLaterContext };
