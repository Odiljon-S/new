const initialState = {
  foo: "teal",
};
const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, foo: action.payload };

    default:
      return state;
  }
};

export default storeReducer;
