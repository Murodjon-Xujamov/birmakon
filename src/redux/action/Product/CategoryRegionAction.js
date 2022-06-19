import requests from "../../../helpers/requests";

export const categoryRegion = () => (dispatch) => {
  dispatch({ type: "category_region_start" });

  requests
    .categoryRegion()
    .then(({ data }) => {
      dispatch({ type: "category_region_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "category_region_error", payload: message });
    });
};
