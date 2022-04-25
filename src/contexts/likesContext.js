import { createContext, useEffect, useReducer } from "react";
import { getLikesService } from "services";
import { likesReducer, likesActions } from "reducers";
import { useAuth } from "customHooks";

const LikesContext = createContext();

const { GET_LIKES } = likesActions;

const LikesProvider = ({ children }) => {
  const {
    authState: { token, isAuth },
  } = useAuth();

  const [likesState, dispatchLikes] = useReducer(likesReducer, {
    likes: [],
  });

  useEffect(() => {
    isAuth &&
      (async () => {
        try {
          const { data, status } = await getLikesService({ token });

          if (status === 200) {
            dispatchLikes({
              type: GET_LIKES,
              payload: { likes: data.likes },
            });
          }
        } catch (err) {
          console.error(err);
        }
      })();
  }, [token]);

  return (
    <LikesContext.Provider value={{ likesState, dispatchLikes }}>
      {children}
    </LikesContext.Provider>
  );
};

export { LikesProvider, LikesContext };
