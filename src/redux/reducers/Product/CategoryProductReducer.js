const INITIAL_STATE = {
  loading: false,
  message: null,
  productCategory: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "product_category_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_category_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_category_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        productCategory: payload.data,
      };
    default:
      return state;
  }
};
