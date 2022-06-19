export const foodsListAdd = (id, name, amount, price) => (dispatch) => {
  dispatch({ type: "fods_list_add", payload: id, name, amount, price });
};

export const foodsCountChange = (product) => (dispatch) => {
  dispatch({ type: "count_change", payload: product });
};
