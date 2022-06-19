import requests from "../../../helpers/requests";

export const product = (params) => (dispatch) => {
  dispatch({ type: "product_start", payload: params });

  requests
    .product(params)
    .then(({ data }) => {
      dispatch({ type: "product_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "product_error", payload: message });
    });
};

export const deleteProduct = (params) => (dispatch) => {
  dispatch({ type: "delete_product_start", payload: params });

  requests
    .deleteProduct(params)
    .then(({ data }) => {
      dispatch({
        type: "delete_product_success",
        payload: data,
      });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "delete_product_error", payload: message });
    });
};
