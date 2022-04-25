import axios from "axios";

const getLikesService = ({ token }) => {
  return axios.get("/api/user/likes", {
    headers: { authorization: token },
  });
};

const addLikedVideoService = ({ token, video }) => {
  return axios.post(
    "/api/user/likes",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

const removeLikedVideoService = ({ token, video }) => {
  return axios.delete(`/api/user/likes/${video._id}`, {
    headers: { authorization: token },
  });
};

export { getLikesService, addLikedVideoService, removeLikedVideoService };
