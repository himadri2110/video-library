import axios from "axios";

const getVideoService = () => {
  return axios.get("/api/videos");
};

export { getVideoService };
