import { Filters, Sidebar, VideoCard } from "components";
import { useVideos } from "contexts";
import { getSearchedVideos } from "utils/getSearchedVideos";
import { getFilteredVideos } from "utils/getFilteredVideos";

const Explore = () => {
  const {
    videosState: { videos, searchText, filterText },
  } = useVideos();

  const searchedVideos = getSearchedVideos(videos, searchText.trim());
  const filteredVideos = getFilteredVideos(searchedVideos, filterText);

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container">
        <div className="explore-filters">
          <Filters />
        </div>

        {filteredVideos.length ? (
          <div className="route-container">
            {filteredVideos.map((video) => (
              <VideoCard video={video} key={video._id} />
            ))}
          </div>
        ) : (
          <p className="text-center">
            No videos found. Search for something else!
          </p>
        )}
      </div>
    </section>
  );
};

export { Explore };
