import "./PlaylistCard.css";
import { videoImage } from "utils";
import { usePlaylists, useAuth } from "customHooks";

const PlaylistCard = ({ playlist }) => {
  const { _id, title, videos } = playlist;
  const { deletePlaylist } = usePlaylists();
  const { navigate } = useAuth();

  return (
    <div
      className="playlist-card"
      onClick={() => navigate(`/playlists/${_id}`)}
    >
      <img
        src={
          videos[0] ? videoImage(videos[0]?._id) : "/assets/empty-playlist.svg"
        }
        alt={title}
        className="resp-img"
      />

      <div className="playlist-body">
        <div className="playlist-overlay">{videos.length}</div>

        <div className="playlist-details">
          <div className="playlist-name">{title}</div>
          <div
            className="playlist-action"
            onClick={(e) => {
              e.stopPropagation();
              deletePlaylist(_id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistCard };
