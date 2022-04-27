import "./Explore.css";
import { Filters, Sidebar, Sort, VideoCard } from "components";
import { useVideos } from "contexts";
import { getSearchedVideos } from "utils/getSearchedVideos";
import { getFilteredVideos } from "utils/getFilteredVideos";
import { sortByDate } from "utils/sortByDate";

const Explore = () => {
  const {
    videosState: { videos, searchText, filterText, sortBy },
  } = useVideos();

  const searchedVideos = getSearchedVideos(videos, searchText.trim());
  const filteredVideos = getFilteredVideos(searchedVideos, filterText);
  const sortedVideos = sortByDate(filteredVideos, sortBy);

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container">
        <div className="explore-filters">
          <Filters />
          <Sort />
        </div>

        {sortedVideos.length ? (
          <div className="route-container">
            {sortedVideos.map((video) => (
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
