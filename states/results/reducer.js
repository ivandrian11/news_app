import { ActionType } from "./action";

function resultsReducer(data = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_RESULTS:
      return action.payload.data;
    case ActionType.CLEAR_RESULTS:
      return [];
    default:
      return data;
  }
}

export default resultsReducer;
