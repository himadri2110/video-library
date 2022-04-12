import "./Explore.css";
import { Navbar, Sidebar } from "components";
import { VideoCard } from "components/VideoCard/VideoCard";
import { useVideos } from "contexts";
const Explore = () => {
  const {
    videosState: { videos },
  } = useVideos();

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section">
        <Sidebar />

        <div className="component-container videos-container">
          {videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export { Explore };
