import "./NewPlaylistForm.css";
import { useState } from "react";
import { usePlaylists } from "customHooks";

const NewPlaylistForm = ({ setShowModalForm, video }) => {
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const { createNewPlaylist } = usePlaylists();

  const submitPlaylistHandler = (e) => {
    e.preventDefault();

    if (newPlaylistName.trim()) {
      setShowModalForm(false);
      setNewPlaylistName("");
      createNewPlaylist({ newPlaylistName, video });
    }
  };

  return (
    <form className="new-playlist-form">
      <div className="input-group input input-primary">
        <input
          autoFocus
          type="text"
          placeholder="Type here..."
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
      </div>

      <div className="new-playlist-action">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => {
            setShowModalForm(false);
            setNewPlaylistName("");
          }}
        >
          Cancel
        </button>

        <button
          className="btn btn-primary"
          type="submit"
          onClick={submitPlaylistHandler}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export { NewPlaylistForm };
