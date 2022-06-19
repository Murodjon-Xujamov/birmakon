const INITIAL_STATE = {
  loading: false,
  message: null,
  subCategoryList: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "sub_category_start":
      return {
        ...state,
        message: "",
        loading: true,
      };
    case "sub_category_error":
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case "sub_category_success":
      return {
        ...state,
        message: payload.message,
        loading: false,
        subCategoryList: payload.data,
      };
    default:
      return state;
  }
};
