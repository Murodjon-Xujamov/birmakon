const INITIAL_STATE = {
  sidebarShow: "responsive",
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    //sidebar toggle reducer
    case "sidebar_toggle":
      return { ...state, ...rest };

    default:
      return state;
  }
};
