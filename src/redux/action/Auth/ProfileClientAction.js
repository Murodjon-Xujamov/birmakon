import requests from "../../../helpers/requests";
export const profileClient = () => (dispatch) => {
  dispatch({ type: "profile_client_start" });

  requests
    .profileClient()
    .then(({ data }) => {
      dispatch({ type: "profile_client_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "profile_client_error", payload: message });
    });
};
