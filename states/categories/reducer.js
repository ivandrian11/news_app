import { ActionType } from "./action";

function categoryReducer(data = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORY:
      return action.payload.data;
    default:
      return data;
  }
}

export default categoryReducer;
