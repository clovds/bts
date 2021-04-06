const INITIAL_STATE = {
  token: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};
