import { ADD_TO_CART, DELETE_FROM_CART } from "./actions";

const initialState = {
  products: [
    { id: 1, title: "Gaming Mouse", price: 29.99 },
    { id: 2, title: "Harry Potter 3", price: 9.99 },
    { id: 3, title: "Used Plastic Bottle", price: 0.99 },
    { id: 4, title: "Half-dried Plant", price: 2.99 }
  ],
  cart: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  let result;
  switch (action.type) {
    case ADD_TO_CART:
      const updateCart = [...state.cart];
      if (updateCart.filter(p => p.id === action.payload.id).length === 0) {
        updateCart.push({ ...action.payload, quality: 1 });
      } else {
        updateCart.filter(p => p.id === action.payload.id)[0].quality++;
      }
      result = { ...state, cart: updateCart };
      break;
    default:
      result = { ...state };
  }
  return result;
};

export default reducer;
