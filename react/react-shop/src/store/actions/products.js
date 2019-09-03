export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

export const DELETED_FROM_CART = "DELETED_FROM_CART";
export const deletedFromCart = product => {
  return {
    type: DELETED_FROM_CART,
    payload: product
  };
};
