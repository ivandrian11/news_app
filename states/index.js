import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import carouselReducer from "./carousel/reducer";
import categoryReducer from "./categories/reducer";
import detailsReducer from "./details/reducer";
import postsReducer from "./posts/reducer";
import resultsReducer from "./results/reducer";

const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    categories: categoryReducer,
    details: detailsReducer,
    posts: postsReducer,
    results: resultsReducer,
    loadingBar: loadingBarReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
