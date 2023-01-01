import { ActionType } from "./action";

function detailsReducer(data = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAILS:
      return action.payload.data;
    case ActionType.CLEAR_DETAILS:
      return null;
    default:
      return data;
  }
}

export default detailsReducer;
