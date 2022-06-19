const INITIAL_STATE = {
  loading: false,
  message: null,
  newProductList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "add_new_product_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "add_new_product_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "add_new_product_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        newProductList: payload.data,
      };
    default:
      return state;
  }
};
