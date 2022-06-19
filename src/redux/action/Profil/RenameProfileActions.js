import requests from "../../../helpers/requests";
export const renameProfile = (params) => (dispatch) => {
  dispatch({ type: "rename_profile_start", payload: params });

  requests
    .renameProfile(params)
    .then(({ data }) => {
      dispatch({ type: "rename_profile_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "rename_profile_error", payload: message });
    });
};
