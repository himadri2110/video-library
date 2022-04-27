import { useLocation } from "react-router-dom";
import { useVideos } from "contexts";
import { videoActions } from "reducers";
import { useAuth } from "customHooks";

const SearchBar = () => {
  const location = useLocation();
  const { navigate } = useAuth();
  const { dispatchVideo } = useVideos();

  const { SET_SEARCH_TEXT, SET_FILTER_TEXT } = videoActions;

  const debounce = (fn, delay) => {
    let timer = 0;

    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const onChangeHandler = (e) => {
    const searchText = e.target.value;

    if (location.pathname !== "/explore" && searchText.trim()) {
      navigate("/explore");
    }

    // Clear Filters
    dispatchVideo({
      type: SET_FILTER_TEXT,
      payload: { filterText: "All" },
    });
    dispatchVideo({
      type: SET_SEARCH_TEXT,
      payload: { searchText },
    });
  };

  return (
    <input
      type="text"
      placeholder="Search videos..."
      onChange={debounce(onChangeHandler, 400)}
    />
  );
};

export { SearchBar };
