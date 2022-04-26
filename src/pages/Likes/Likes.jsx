import { Sidebar, VideoCard } from "components";
import { useLikes } from "customHooks";

const Likes = () => {
  const {
    likesState: { likes },
  } = useLikes();

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container">
        {likes.length ? (
          likes.map((likedVideo) => (
            <VideoCard video={likedVideo} key={likedVideo._id} />
          ))
        ) : (
          <p className="text-center">No liked videos</p>
        )}
      </div>
    </section>
  );
};

export { Likes };
