import { Sidebar, VideoCard } from "components";
import { useWatchLater } from "customHooks";

const WatchLater = () => {
  const {
    watchLaterState: { watchLater },
  } = useWatchLater();

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container">
        {watchLater.length ? (
          watchLater.map((watchLater) => (
            <VideoCard video={watchLater} key={watchLater._id} />
          ))
        ) : (
          <p className="text-center">No videos in Watchlater</p>
        )}
      </div>
    </section>
  );
};

export { WatchLater };
