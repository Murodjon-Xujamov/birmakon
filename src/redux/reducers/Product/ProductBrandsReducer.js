const INITIAL_STATE = {
  loading: false,
  message: null,
  brandsList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "product_brands_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_brands_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_brands_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        brandsList: payload.data,
      };

    default:
      return state;
  }
};
