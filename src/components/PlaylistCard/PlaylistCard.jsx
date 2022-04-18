import "./PlaylistCard.css";
import { videoImage } from "utils/getVideoImages";
import { usePlaylists } from "customHooks";

const PlaylistCard = ({ playlist }) => {
  const { _id, title, videos } = playlist;
  const { deletePlaylist } = usePlaylists();

  return (
    <div className="playlist-card">
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
          <div className="playlist-action" onClick={() => deletePlaylist(_id)}>
            <i className="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistCard };
