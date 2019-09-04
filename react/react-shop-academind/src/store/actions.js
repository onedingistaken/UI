export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = product => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_TO_CART,
        payload: product
      });
    }, 700);
  };
};

export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const deleteFromCart = productId => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: DELETE_FROM_CART,
        payload: productId
      });
    }, 400);
  };
};
