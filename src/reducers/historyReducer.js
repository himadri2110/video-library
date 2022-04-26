import { historyActions } from "./actionTypes";

const { GET_HISTORY } = historyActions;

const historyReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_HISTORY:
      return { ...state, history: payload.history };
    default:
      return state;
  }
};

export { historyReducer };
