import axios from "axios";

const getPlaylistsService = (token) => {
  return axios.get("/api/user/playlists", {
    headers: { authorization: token },
  });
};

const addNewPlaylistService = ({ token, newPlaylistName }) => {
  return axios.post(
    "/api/user/playlists",
    { playlist: { title: newPlaylistName } },
    {
      headers: { authorization: token },
    }
  );
};

const deletePlaylistService = ({ token, playlistId }) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

const addVideoToPlaylistService = ({ token, video, playlist }) => {
  return axios.post(
    `/api/user/playlists/${playlist._id}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

const deleteVideoFromPlaylistService = ({
  token,
  videoInPlaylist,
  playlist,
}) => {
  return axios.delete(
    `/api/user/playlists/${playlist._id}/${videoInPlaylist._id}`,
    {
      headers: { authorization: token },
    }
  );
};

export {
  getPlaylistsService,
  addNewPlaylistService,
  deletePlaylistService,
  addVideoToPlaylistService,
  deleteVideoFromPlaylistService,
};
