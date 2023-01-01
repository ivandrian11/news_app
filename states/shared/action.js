import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { receiveMostViewed } from "../carousel/action";
import { receiveCategory } from "../categories/action";

function asyncReceiveHomeData() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const post = await api.getMostViewed();
      const category = await api.getCategory();

      dispatch(receiveMostViewed(post));
      dispatch(receiveCategory(category));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { asyncReceiveHomeData };
