import "./Explore.css";
import { Sidebar, VideoCard } from "components";
import { useVideos } from "contexts";

const Explore = () => {
  const {
    videosState: { videos },
  } = useVideos();

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container videos-container">
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </section>
  );
};

export { Explore };
