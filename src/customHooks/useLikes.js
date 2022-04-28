import { useContext } from "react";
import toast from "react-hot-toast";
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
        toast.success("Added to likes");

        dispatchLikes({ type: GET_LIKES, payload: { likes: data.likes } });
      }
    } catch (err) {
      toast.error("Error occured. Try again later.");
      console.error(err);
    }
  };

  const removeVideoFromLikes = async ({ currentVideo: video }) => {
    try {
      const { data, status } = await removeLikedVideoService({ token, video });

      if (status === 200) {
        toast.success("Removed from likes");

        dispatchLikes({ type: GET_LIKES, payload: { likes: data.likes } });
      }
    } catch (err) {
      toast.error("Error occured. Try again later.");
      console.error(err);
    }
  };

  return { likesState, dispatchLikes, addVideoToLikes, removeVideoFromLikes };
};

export { useLikes };
