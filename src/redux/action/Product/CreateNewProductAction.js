import requests from "../../../helpers/requests";

export const addProduct = (params) => (dispatch) => {
  dispatch({ type: "add_new_product_start", payload: params });

  requests
    .addProduct(params)
    .then(({ data }) => {
      dispatch({ type: "add_new_product_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "add_new_product_error", payload: message });
    });
};
