export const ADDED_TO_CART = "ADDED_TO_CART";
export const addedToCart = product => {
  return {
    type: ADDED_TO_CART,
    payload: product
  };
};

export const DELETE_FROM_CART = "DELETE_PRODUCT";
export const deleteFromCart = id => {
  return {
    type: DELETE_FROM_CART,
    id
  };
};
