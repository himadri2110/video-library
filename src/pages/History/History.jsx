import "./History.css";
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
            <div className="history-header">
              <h4 className="history-title">Watch History</h4>
              <button className="history-action" onClick={clearHistory}>
                <i className="fa-solid fa-trash"></i> Clear History
              </button>
            </div>

            <div className="history-container">
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
