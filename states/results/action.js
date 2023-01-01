import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_RESULTS: "RECEIVE_RESULTS",
  CLEAR_RESULTS: "CLEAR_RESULTS",
};

function receiveResultActionCreators(data) {
  return {
    type: ActionType.RECEIVE_RESULTS,
    payload: {
      data,
    },
  };
}

function clearResultsActionCreator() {
  return {
    type: ActionType.CLEAR_RESULTS,
  };
}

function asyncReceiveResults(keyword, page) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearResultsActionCreator());

    try {
      const results = await api.searchPost(keyword, page);

      dispatch(receiveResultActionCreators(results));
    } catch (error) {
      alert(error.message);
      window.location = "/";
    }

    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveResults };
