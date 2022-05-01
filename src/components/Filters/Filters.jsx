import "./Filters.css";
import { useLocation } from "react-router-dom";
import { categories } from "backend/db/categories";
import { useAuth } from "customHooks";
import { useVideos } from "contexts";
import { videoActions } from "reducers";

const Filters = () => {
  const {
    videosState: { filterText },
    dispatchVideo,
  } = useVideos();

  const { navigate } = useAuth();
  const { pathname } = useLocation();

  const { SET_FILTER_TEXT, SET_SEARCH_TEXT } = videoActions;

  const applyFilters = (category) => {
    if (pathname !== "/explore") {
      navigate("/explore");
    }

    // Clear search
    dispatchVideo({
      type: SET_SEARCH_TEXT,
      payload: { searchText: "" },
    });
    dispatchVideo({
      type: SET_FILTER_TEXT,
      payload: { filterText: category.categoryName },
    });
  };

  return (
    <div className="filter-chips">
      {categories.map((category) => (
        <button
          key={category._id}
          className={
            category.categoryName === filterText ? "active-filter" : null
          }
          onClick={() => applyFilters(category)}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export { Filters };
