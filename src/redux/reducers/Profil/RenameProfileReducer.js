const INITIAL_STATE = {
  loading: false,
  token: null,
  message: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "rename_profile_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "rename_profile_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "rename_profile_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
