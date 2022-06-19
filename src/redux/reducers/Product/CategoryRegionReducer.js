const INITIAL_STATE = {
  loading: false,
  message: null,
  region: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "category_region_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "category_region_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "category_region_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        region: payload.data,
      };
    default:
      return state;
  }
};
