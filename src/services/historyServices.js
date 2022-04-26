import axios from "axios";

const getHistoryService = ({ token }) => {
  return axios.get("/api/user/history", { headers: { authorization: token } });
};

const addToHistoryService = ({ token, video }) => {
  return axios.post(
    "/api/user/history",
    { video },
    { headers: { authorization: token } }
  );
};

const removeFromHistoryService = ({ token, video }) => {
  return axios.delete(`/api/user/history/${video._id}`, {
    headers: { authorization: token },
  });
};

const clearHistoryService = ({ token }) => {
  return axios.delete("/api/user/history/all", {
    headers: { authorization: token },
  });
};

export {
  getHistoryService,
  addToHistoryService,
  removeFromHistoryService,
  clearHistoryService,
};
