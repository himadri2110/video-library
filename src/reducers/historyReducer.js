import { historyActions } from "./actionTypes";

const { GET_HISTORY, SET_LOADING } = historyActions;

const historyReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_HISTORY:
      return { ...state, history: payload.history };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};

export { historyReducer };
