import { useContext } from "react";
import { WatchLaterContext } from "contexts";
import { addToWatchLaterService, removeFromWatchLaterService } from "services";
import { useAuth } from "customHooks";
import { watchLaterActions } from "reducers";

const useWatchLater = () => {
  const {
    authState: { token },
  } = useAuth();

  const { GET_WATCHLATER, SET_LOADING } = watchLaterActions;
  const { watchLaterState, dispatchWatchLater } = useContext(WatchLaterContext);

  const addToWatchLater = async ({ video }) => {
    try {
      const { data, status } = await addToWatchLaterService({ token, video });

      if (status === 201) {
        dispatchWatchLater({
          type: GET_WATCHLATER,
          payload: { watchLater: data.watchlater },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromWatchLater = async ({ video }) => {
    try {
      dispatchWatchLater({ type: SET_LOADING, payload: true });

      const { data, status } = await removeFromWatchLaterService({
        token,
        video,
      });

      if (status === 200) {
        dispatchWatchLater({
          type: GET_WATCHLATER,
          payload: { watchLater: data.watchlater },
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatchWatchLater({ type: SET_LOADING, payload: false });
    }
  };

  return {
    watchLaterState,
    dispatchWatchLater,
    addToWatchLater,
    removeFromWatchLater,
  };
};

export { useWatchLater };
