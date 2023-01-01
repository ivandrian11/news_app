import { ActionType } from "./action";

function carouselReducer(data = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_MOST_VIEWED:
      return action.payload.data;
    default:
      return data;
  }
}

export default carouselReducer;
