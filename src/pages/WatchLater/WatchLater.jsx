import { Sidebar, VideoCard, Loader } from "components";
import { useWatchLater } from "customHooks";

const WatchLater = () => {
  const {
    watchLaterState: { watchLater, isLoading },
  } = useWatchLater();

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container">
        {isLoading ? (
          <Loader />
        ) : watchLater.length ? (
          <>
            <div className="route-header">
              <h4>Watch Later</h4>
              <span className="route-action">{watchLater.length} videos</span>
            </div>

            <div className="route-container">
              {watchLater.map((watchLater) => (
                <VideoCard video={watchLater} key={watchLater._id} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center">No videos in Watchlater</p>
        )}
      </div>
    </section>
  );
};

export { WatchLater };
