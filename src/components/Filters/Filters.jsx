import "./Filters.css";
import { categories } from "backend/db/categories";
import { useVideos } from "contexts";
import { videoActions } from "reducers";

const Filters = () => {
  const {
    videosState: { filterText },
    dispatchVideo,
  } = useVideos();
  const { SET_FILTER_TEXT, SET_SEARCH_TEXT } = videoActions;

  return (
    <div className="filter-chips">
      {categories.map((category) => (
        <button
          key={category._id}
          className={
            category.categoryName === filterText ? "active-filter" : null
          }
          onClick={() => {
            // Clear search
            dispatchVideo({
              type: SET_SEARCH_TEXT,
              payload: { searchText: "" },
            });
            dispatchVideo({
              type: SET_FILTER_TEXT,
              payload: { filterText: category.categoryName },
            });
          }}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export { Filters };
