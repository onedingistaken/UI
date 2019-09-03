import { ADD_TO_CART, DELETED_FROM_CART } from "../actions/products";

const initialState = [
  { id: 1, title: "Gaming Mouse", price: 29.99 },
  { id: 2, title: "Harry Potter 3", price: 9.99 },
  { id: 3, title: "Used Plastic Bottle", price: 0.99 },
  { id: 4, title: "Half-dried Plant", price: 2.99 }
];

const ProductReducer = (state = initialState, action) => {
  // console.log(action);
  let products = [];
  switch (action.type) {
    case ADD_TO_CART:
      products = state.filter(p => p.id !== action.id);
      break;
    case DELETED_FROM_CART:
      products = [...state, action.payload];
      break;
    default:
      products = state;
  }
  return products;
};

export default ProductReducer;
