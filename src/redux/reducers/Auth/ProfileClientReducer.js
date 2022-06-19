const INITIAL_STATE = {
  loading: false,
  token: null,
  message: null,
  profileClient: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "profile_client_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "profile_client_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "profile_client_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        profileClient: payload.data,
      };

    default:
      return state;
  }
};
