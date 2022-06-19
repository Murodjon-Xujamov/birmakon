const INITIAL_STATE = {
  loading: false,
  message: null,
  productList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "product_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "product_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "product_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        productList: payload.data,
      };

    case "delete_product_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "delete_product_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "delete_product_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        productList: payload.data,
      };
    default:
      return state;
  }
};
