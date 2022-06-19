import requests from "../../../helpers/requests";

export const subCategory = (id) => (dispatch) => {
  dispatch({ type: "sub_category_start", payload: id });

  requests
    .subCategory(id)
    .then(({ data }) => {
      dispatch({ type: "sub_category_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "sub_category_error", payload: message });
    });
};
