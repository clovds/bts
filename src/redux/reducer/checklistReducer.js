const INITIAL_STATE = {
  checklist: [],
};

export const checklistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CHECKLIST":
      return {
        checklist: action.payload,
      };
    default:
      return state;
  }
};
