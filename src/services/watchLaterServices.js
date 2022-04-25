import axios from "axios";

const getWatchLaterService = ({ token }) => {
  return axios.get("/api/user/watchlater", {
    headers: { authorization: token },
  });
};

const addToWatchLaterService = ({ token, video }) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

const removeFromWatchLaterService = ({ video, token }) => {
  return axios.delete(`/api/user/watchlater/${video._id}`, {
    headers: { authorization: token },
  });
};

export {
  getWatchLaterService,
  addToWatchLaterService,
  removeFromWatchLaterService,
};
