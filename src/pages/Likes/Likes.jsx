import { Sidebar, VideoCard, Loader } from "components";
import { useLikes } from "customHooks";

const Likes = () => {
  const {
    likesState: { likes, isLoading },
  } = useLikes();

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container">
        {isLoading ? (
          <Loader />
        ) : likes.length ? (
          <>
            <div className="route-header">
              <h4>Your likes</h4>
              <span className="route-action">{likes.length} videos</span>
            </div>

            <div className="route-container">
              {likes.map((likedVideo) => (
                <VideoCard video={likedVideo} key={likedVideo._id} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center">No liked videos</p>
        )}
      </div>
    </section>
  );
};

export { Likes };
