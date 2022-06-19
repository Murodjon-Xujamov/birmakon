const INITIAL_STATE = {
  loading: false,
  message: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "product_lock_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_lock_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_lock_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    case "product_unlock_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_unlock_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_unlock_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };

    default:
      return state;
  }
};
