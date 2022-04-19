import "./VideoCard.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { videoImage, creatorAvatar } from "utils/getVideoImages";
import { PlaylistModal } from "components";
import { usePlaylists } from "customHooks";

const VideoCard = ({
  video,
  videoCardInPlaylist,
  currentPlaylist: playlist,
}) => {
  const { _id, title, creator, creatorAvatarId } = video;

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showMoreOptionsModal, setShowMoreOptionsModal] = useState(false);

  const { deleteVideoFromPlaylist } = usePlaylists();

  const videoRef = useRef();

  useEffect(() => {
    const closeModal = (e) => {
      if (
        showMoreOptionsModal &&
        videoRef.current &&
        !videoRef.current.contains(e.target)
      ) {
        setShowMoreOptionsModal(false);
      }
    };

    document.addEventListener("mousedown", closeModal);

    return () => document.removeEventListener("mousedown", closeModal);
  }, [showMoreOptionsModal]);

  return (
    <div className="card-wrapper basic-card video-card" ref={videoRef}>
      <Link to={`/explore/${_id}`}>
        <img src={videoImage(_id)} className="card-img" alt={title} />
      </Link>

      <div className="card-content">
        <div className="card-avatar">
          <img
            src={creatorAvatar(creatorAvatarId)}
            className="avatar avatar-xs"
            alt={creator}
          />
        </div>

        <Link to={`/explore/${_id}`} className="card-text">
          <div className="card-heading">{title}</div>
          <div className="card-creator">{creator}</div>
        </Link>

        {videoCardInPlaylist ? null : (
          <button
            className="more-options-menu"
            onClick={() => setShowMoreOptionsModal((show) => !show)}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        )}

        {videoCardInPlaylist ? (
          <div
            className="playlist-action"
            onClick={() =>
              deleteVideoFromPlaylist({
                videoInPlaylist: video,
                playlist,
              })
            }
          >
            <i className="fa-solid fa-trash"></i>
          </div>
        ) : null}

        {showMoreOptionsModal ? (
          <ul className="more-options-modal">
            <li>
              <button>
                <i className="fa-solid fa-clock"></i> Save to Watch later
              </button>
            </li>
            <li
              onClick={() => {
                setShowPlaylistModal(true);
                setShowMoreOptionsModal(false);
              }}
            >
              <button>
                <i className="fa-solid fa-folder-plus"></i> Save to Playlist
              </button>
            </li>
          </ul>
        ) : null}
      </div>

      {showPlaylistModal ? (
        <PlaylistModal
          video={video}
          setShowPlaylistModal={setShowPlaylistModal}
        />
      ) : null}
    </div>
  );
};

export { VideoCard };
