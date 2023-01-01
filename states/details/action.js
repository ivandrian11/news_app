import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_DETAILS: "RECEIVE_DETAILS",
  CLEAR_DETAILS: "CLEAR_DETAILS",
};

function receiveDetailsActionCreator(data) {
  return {
    type: ActionType.RECEIVE_DETAILS,
    payload: {
      data,
    },
  };
}

function clearDetailsActionCreator() {
  return {
    type: ActionType.CLEAR_DETAILS,
  };
}

function asyncReceiveDetails(link) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearDetailsActionCreator());

    try {
      const post = await api.getDetails(link);

      dispatch(receiveDetailsActionCreator(post));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, asyncReceiveDetails };
