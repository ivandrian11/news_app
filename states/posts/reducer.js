import { ActionType } from "./action";

function postsReducer(data = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_POSTS:
      return action.payload.data;
    case ActionType.CLEAR_POSTS:
      return [];
    default:
      return data;
  }
}

export default postsReducer;
