import requests from "../../../helpers/requests";

export const brands = () => (dispatch) => {
  dispatch({ type: "product_brands_start" });
  requests
    .brands()
    .then(({ data }) => {
      dispatch({ type: "product_brands_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "product_brands_error", payload: message });
    });
};
