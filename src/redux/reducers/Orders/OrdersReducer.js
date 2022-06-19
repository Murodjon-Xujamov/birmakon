const INITIAL_STATE = {
  loading: false,
  message: null,
  ordersList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "orders_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "orders_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "orders_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        ordersList: payload.data,
      };
    case "delete_order_id_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "delete_order_id_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "delete_order_id_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        ordersList: state.ordersList.filter((item) => item.id !== payload.id),
      };
    case "check_order_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "check_order_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "check_order_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    case "decline_order_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "decline_order_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "decline_order_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
      };
    default:
      return state;
  }
};
