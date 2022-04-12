import "./VideoCard.css";
import { videoImage, creatorAvatar } from "utils/getVideoImages";

const VideoCard = ({ video }) => {
  const { _id, title, creator, creatorAvatarId } = video;

  return (
    <div className="card-wrapper basic-card video-card">
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

        <div className="moreOptionsMenu">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
