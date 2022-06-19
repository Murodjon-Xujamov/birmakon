import requests from "../../../helpers/requests";

export const orders = (params) => (dispatch) => {
  dispatch({ type: "orders_start", payload: params });

  requests
    .orders(params)
    .then(({ data }) => {
      dispatch({ type: "orders_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";

      dispatch({ type: "orders_error", payload: message });
    });
};

export const deleteOrderId = (id) => (dispatch) => {
  dispatch({ type: "delete_order_id_start", payload: id });
  requests
    .deleteOrderId(id)
    .then(({ data }) => {
      dispatch({ type: "delete_order_id_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "delete_order_id_error", payload: message });
    });
};

export const checkOrder = (params) => (dispatch) => {
  dispatch({ type: "check_order_start", payload: params });
  requests
    .checkOrder(params)
    .then(({ data }) => {
      dispatch({ type: "check_order_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "check_order_error", payload: message });
    });
};

export const declineOrder = (params) => (dispatch) => {
  dispatch({ type: "decline_order_start", payload: params });
  requests
    .declineOrder(params)
    .then(({ data }) => {
      dispatch({ type: "decline_order_success", payload: data });
    })
    .catch(({ response }) => {
      let message = (response && response.data.message) || "Login error";
      dispatch({ type: "decline_order_error", payload: message });
    });
};
