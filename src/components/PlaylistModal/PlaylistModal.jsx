import "./PlaylistModal.css";
import { useState } from "react";
import { usePlaylists } from "customHooks";
import { NewPlaylistForm } from "components";

const PlaylistModal = ({ video, setShowPlaylistModal }) => {
  const [showModalForm, setShowModalForm] = useState(false);

  const {
    playlistsState: { playlists },
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
  } = usePlaylists();

  return (
    <div className="modal-open">
      <div className="basic-card">
        <div className="card-header">
          <h3>Add to Playlist</h3>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setShowPlaylistModal(false)}
          ></i>
        </div>

        {!playlists.length ? (
          <p className="default-placeholder">No playlist exists</p>
        ) : null}

        <div className="form-group">
          <div className="input-group">
            {playlists.map((playlist) => {
              const videoInPlaylist = playlist.videos.find(
                (playlistVideo) => playlistVideo._id === video._id
              );

              return (
                <label key={playlist._id} className="playlist-label">
                  <input
                    type="checkbox"
                    checked={videoInPlaylist ? true : false}
                    onChange={() =>
                      videoInPlaylist
                        ? deleteVideoFromPlaylist({ videoInPlaylist, playlist })
                        : addVideoToPlaylist({ video, playlist })
                    }
                  />
                  {playlist.title}
                </label>
              );
            })}
          </div>

          {!showModalForm ? (
            <button
              className="text-primary"
              type="button"
              onClick={() => setShowModalForm(true)}
            >
              <i className="fa-solid fa-plus"></i> Create New Playlist
            </button>
          ) : null}

          {showModalForm ? (
            <NewPlaylistForm
              setShowModalForm={setShowModalForm}
              video={video}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
