const ActionType = {
  RECEIVE_MOST_VIEWED: "RECEIVE_MOST_VIEWED",
};

function receiveMostViewed(data) {
  return {
    type: ActionType.RECEIVE_MOST_VIEWED,
    payload: {
      data,
    },
  };
}

export { ActionType, receiveMostViewed };
