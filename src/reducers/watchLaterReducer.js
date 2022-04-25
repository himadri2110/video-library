import { watchLaterActions } from "reducers";

const { GET_WATCHLATER } = watchLaterActions;

const watchLaterReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_WATCHLATER:
      return { ...state, watchLater: payload.watchLater };
    default:
      return state;
  }
};

export { watchLaterReducer };
