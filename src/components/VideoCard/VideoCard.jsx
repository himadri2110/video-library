import "./VideoCard.css";
import { useState, useEffect, useRef } from "react";
import { videoImage, creatorAvatar } from "utils/getVideoImages";
import { PlaylistModal } from "components";

const VideoCard = ({ video }) => {
  const { _id, title, creator, creatorAvatarId } = video;

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showMoreOptionsModal, setShowMoreOptionsModal] = useState(false);

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
      <div>
        <img src={videoImage(_id)} className="card-img" alt={title} />
      </div>

      <div className="card-content">
        <div className="card-avatar">
          <img
            src={creatorAvatar(creatorAvatarId)}
            className="avatar avatar-xs"
            alt={creator}
          />
        </div>

        <div className="card-text">
          <div className="card-heading">{title}</div>
          <div className="card-creator">{creator}</div>
        </div>

        <div
          className="more-options-menu"
          onClick={() => setShowMoreOptionsModal((show) => !show)}
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        {showMoreOptionsModal ? (
          <ul className="more-options-modal">
            <li>
              <i className="fa-solid fa-clock"></i> Save to Watch later
            </li>
            <li
              onClick={() => {
                setShowPlaylistModal(true);
                setShowMoreOptionsModal(false);
              }}
            >
              <i className="fa-solid fa-folder-plus"></i> Save to Playlist
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
