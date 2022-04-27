import "./Sort.css";
import { useState } from "react";
import { useVideos } from "contexts";
import { videoActions } from "reducers";

const Sort = () => {
  const [showSortModal, setShowSortModal] = useState(false);

  const {
    videosState: { sortBy },
    dispatchVideo,
  } = useVideos();

  const { SET_SORT_BY } = videoActions;

  return (
    <div className="sort-container">
      <button
        onClick={() => setShowSortModal((show) => !show)}
        className="sort-btn"
      >
        Sort <i className="fa-solid fa-sort"></i>
      </button>

      {showSortModal ? (
        <div className="input-group sort-modal">
          <label>
            <input
              type="radio"
              name="newest"
              checked={sortBy === "newest"}
              onChange={() =>
                dispatchVideo({
                  type: SET_SORT_BY,
                  payload: { sortBy: "newest" },
                })
              }
            />
            Date added (newest)
          </label>
          <label>
            <input
              type="radio"
              name="oldest"
              checked={sortBy === "oldest"}
              onChange={() =>
                dispatchVideo({
                  type: SET_SORT_BY,
                  payload: { sortBy: "oldest" },
                })
              }
            />
            Date added (oldest)
          </label>
        </div>
      ) : null}
    </div>
  );
};

export { Sort };
