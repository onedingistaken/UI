import { ADDED_TO_CART, DELETE_FROM_CART } from "../actions/cart";

const initialState = [];

const CartReducer = (state = initialState, action) => {
  // console.log(action);
  let cart = [];
  switch (action.type) {
    case ADDED_TO_CART:
      const currentProduct = action.payload;
      const count = state.filter(p => p.id === currentProduct.id).length;
      if (count === 0) {
        currentProduct.count = 1;
        cart = [...state, currentProduct];
      } else {
        state.filter(p => p.id === currentProduct.id)[0].count = count + 1;
        cart = state;
      }
      break;
    case DELETE_FROM_CART:
      cart = state.filter(p => p.id !== action.id);
      break;
    default:
      cart = state;
  }
  return cart;
};

export default CartReducer;
