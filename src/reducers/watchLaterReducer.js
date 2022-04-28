import { watchLaterActions } from "reducers";

const { GET_WATCHLATER, SET_LOADING } = watchLaterActions;

const watchLaterReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_WATCHLATER:
      return { ...state, watchLater: payload.watchLater };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

export { watchLaterReducer };
