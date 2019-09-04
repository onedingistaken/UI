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
  //   console.log(action);
  let result;
  switch (action.type) {
    case ADD_TO_CART:
      let addToCart = [...state.cart];
      if (addToCart.filter(p => p.id === action.payload.id).length === 0) {
        addToCart.push({ ...action.payload, quantity: 1 });
      } else {
        addToCart.filter(p => p.id === action.payload.id)[0].quantity++;
      }
      result = { ...state, cart: addToCart };
      break;
    case DELETE_FROM_CART:
      let removeFromCart = [...state.cart];
      if (
        removeFromCart.filter(p => p.id === action.payload)[0].quantity === 1
      ) {
        removeFromCart = [
          ...removeFromCart.filter(p => p.id !== action.payload)
        ];
      } else {
        removeFromCart.filter(p => p.id === action.payload)[0].quantity--;
      }
      console.log(removeFromCart);
      result = { ...state, cart: removeFromCart };
      break;
    default:
      result = { ...state };
  }
  return result;
};

export default reducer;
