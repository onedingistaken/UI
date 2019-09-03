import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/products";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const Store = createStore(rootReducer);

export default Store;
