import { useContext } from "react";
import { LikesContext } from "contexts";
import { addLikedVideoService, removeLikedVideoService } from "services";
import { useAuth } from "customHooks";
import { likesActions } from "reducers";

const useLikes = () => {
  const {
    authState: { token },
  } = useAuth();

  const { GET_LIKES } = likesActions;

  const { likesState, dispatchLikes } = useContext(LikesContext);

  const addVideoToLikes = async ({ currentVideo: video }) => {
    try {
      const { data, status } = await addLikedVideoService({ token, video });

      if (status === 201) {
        dispatchLikes({ type: GET_LIKES, payload: { likes: data.likes } });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeVideoFromLikes = async ({ currentVideo: video }) => {
    try {
      const { data, status } = await removeLikedVideoService({ token, video });

      if (status === 200) {
        dispatchLikes({ type: GET_LIKES, payload: { likes: data.likes } });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { likesState, dispatchLikes, addVideoToLikes, removeVideoFromLikes };
};

export { useLikes };
