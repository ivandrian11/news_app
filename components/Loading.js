import React from "react";
import LoadingBar from "react-redux-loading-bar";

function Loading() {
  return (
    <div className="sticky top-0 z-50 bg-cyan-500">
      <LoadingBar style={{ backgroundColor: "#06b6d4" }} />
    </div>
  );
}

export default Loading;
