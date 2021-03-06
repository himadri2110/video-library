import "./VideoCard.css";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { videoImage, creatorAvatar, getTrimmedViewCount } from "utils";
import { PlaylistModal } from "components";
import { usePlaylists, useAuth, useWatchLater, useHistory } from "customHooks";

const VideoCard = ({
  video,
  videoCardInPlaylist,
  currentPlaylist: playlist,
}) => {
  const { _id, title, creator, creatorAvatarId, viewCount, releaseDate } =
    video;

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showMoreOptionsModal, setShowMoreOptionsModal] = useState(false);

  const { deleteVideoFromPlaylist } = usePlaylists();

  const {
    watchLaterState: { watchLater },
    addToWatchLater,
    removeFromWatchLater,
  } = useWatchLater();

  const videoInWatchLater = watchLater.find(
    (watchLaterVideo) => watchLaterVideo._id === video._id
  );

  const {
    historyState: { history },
    removeVideoFromHistory,
  } = useHistory();

  const videoInHistory = history.find(
    (historyVideo) => historyVideo._id === video._id
  );

  const {
    authState: { isAuth },
    navigate,
  } = useAuth();

  const { pathname } = useLocation();

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
          {pathname === "/explore" ? (
            <div className="card-numbers">
              <span>{getTrimmedViewCount(viewCount)} views</span>??
              <span>{releaseDate}</span>
            </div>
          ) : null}
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
            <li
              onClick={() => {
                isAuth
                  ? videoInWatchLater
                    ? removeFromWatchLater({ video })
                    : addToWatchLater({ video })
                  : navigate("/login");
                setShowMoreOptionsModal(false);
              }}
            >
              <button>
                <i className="fa-solid fa-clock"></i>{" "}
                {isAuth
                  ? videoInWatchLater
                    ? "Remove from Watch later"
                    : "Save to Watch later"
                  : "Save to Watch later"}
              </button>
            </li>

            <li
              onClick={() => {
                isAuth ? setShowPlaylistModal(true) : navigate("/login");
                setShowMoreOptionsModal(false);
              }}
            >
              <button>
                <i className="fa-solid fa-folder-plus"></i> Save to Playlist
              </button>
            </li>

            {videoInHistory ? (
              <li
                onClick={() => {
                  removeVideoFromHistory({ video });
                  setShowMoreOptionsModal(false);
                }}
              >
                <button>
                  <i className="fa-solid fa-ban"></i> Remove from History
                </button>
              </li>
            ) : null}
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
