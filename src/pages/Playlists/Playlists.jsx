import "./Playlists.css";
import { useState } from "react";
import { Sidebar, PlaylistCard, NewPlaylistForm, Loader } from "components";
import { usePlaylists } from "customHooks";

const Playlists = () => {
  const [showModalForm, setShowModalForm] = useState(false);

  const {
    playlistsState: { playlists, isLoading },
  } = usePlaylists();

  return (
    <section className="main-section">
      <Sidebar />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="component-container playlists-container">
          <div className="playlist-card new-playlist">
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
              <NewPlaylistForm setShowModalForm={setShowModalForm} />
            ) : null}
          </div>

          {playlists.length
            ? playlists.map((playlist) => (
                <PlaylistCard playlist={playlist} key={playlist._id} />
              ))
            : null}
        </div>
      )}
    </section>
  );
};

export { Playlists };
