import "./SingleVideo.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { Sidebar, PlaylistModal } from "components";
import { useVideos } from "contexts";
import { videoThumbnail, creatorAvatar } from "utils/getVideoImages";
import { useAuth } from "customHooks";

const SingleVideo = () => {
  const { videoId } = useParams();

  const {
    videosState: { videos },
  } = useVideos();

  const {
    authState: { isAuth },
    navigate,
  } = useAuth();

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const currentVideo = videos?.find((video) => video._id === videoId);

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container single-video-container">
        <div className="video-details">
          <div className="video-thumbnail">
            <ReactPlayer
              url={videoThumbnail(videoId)}
              width="100%"
              height="100%"
            />
          </div>

          <div className="video-header">
            <div className="video-title">{currentVideo?.title}</div>

            <div className="video-subheader">
              <div className="video-numbers">
                <div className="video-views">
                  {currentVideo?.viewCount} views
                </div>
                ·
                <div className="video-release">{currentVideo?.releaseDate}</div>
              </div>

              <div className="video-actions">
                <button>
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
                <button>
                  <i className="fa-solid fa-clock"></i>
                </button>
                <button>
                  <i
                    className="fa-solid fa-folder-plus"
                    onClick={() => {
                      isAuth ? setShowPlaylistModal(true) : navigate("/login");
                    }}
                  ></i>
                </button>
              </div>
            </div>
          </div>

          <div className="video-body">
            <img
              src={creatorAvatar(currentVideo?.creatorAvatarId)}
              className="creator-avatar avatar avatar-xs"
              alt={currentVideo?.creator}
            />

            <div className="video-content">
              <div className="creator-name">{currentVideo?.creator}</div>
              <div className="video-description">
                {currentVideo?.description}
              </div>
            </div>
          </div>
        </div>

        <div className="video-notes"></div>
      </div>

      {showPlaylistModal ? (
        <PlaylistModal
          video={currentVideo}
          setShowPlaylistModal={setShowPlaylistModal}
        />
      ) : null}
    </section>
  );
};

export { SingleVideo };
