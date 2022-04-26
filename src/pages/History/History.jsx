import { Sidebar, VideoCard } from "components";
import { useHistory } from "customHooks";

const History = () => {
  const {
    historyState: { history },
    clearHistory,
  } = useHistory();

  return (
    <section className="main-section">
      <Sidebar />

      <div className="component-container">
        {history.length ? (
          <>
            <div className="route-header">
              <h4>Watch History</h4>
              <button className="route-action" onClick={clearHistory}>
                <i className="fa-solid fa-trash"></i> Clear History
              </button>
            </div>

            <div className="route-container">
              {history.map((historyVideo) => (
                <VideoCard video={historyVideo} key={historyVideo._id} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center">History is empty</p>
        )}
      </div>
    </section>
  );
};

export { History };