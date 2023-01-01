import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_POSTS: "RECEIVE_POSTS",
  CLEAR_POSTS: "CLEAR_POSTS",
};

function receivePostsActionCreator(data) {
  return {
    type: ActionType.RECEIVE_POSTS,
    payload: {
      data,
    },
  };
}

function clearPostsActionCreator() {
  return {
    type: ActionType.CLEAR_POSTS,
  };
}

function asyncReceivePosts(link) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearPostsActionCreator());

    try {
      const post = await api.getPostByCategory(link);

      dispatch(receivePostsActionCreator(post));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceivePosts };
