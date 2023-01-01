const ActionType = {
  RECEIVE_CATEGORY: "RECEIVE_CATEGORY",
};

function receiveCategory(data) {
  return {
    type: ActionType.RECEIVE_CATEGORY,
    payload: {
      data,
    },
  };
}

export { ActionType, receiveCategory };
