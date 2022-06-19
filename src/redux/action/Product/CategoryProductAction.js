import requests from "../../../helpers/requests";

export const categoryProduct = () => (dispatch) => {
  dispatch({ type: "product_category_start" });

  requests
    .categoryProduct()
    .then(({ data }) => {
      dispatch({ type: "product_category_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "product_category_error", payload: message });
    });
};
