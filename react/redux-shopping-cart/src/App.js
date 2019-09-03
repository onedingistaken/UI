import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { addToCart, deleteFromCart } from "./store/actions";

function App(props) {
  return (
    <div className="App">
      <Nav cartItemCount={props.cartItemCount} />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Product} exact={true} />
          <Route path="/cart" component={Cart} exact={true} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Nav({ cartItemCount }) {
  return (
    <div className="Nav">
      <span className="nav_products">Products</span>
      <span className="nav_cart">Cart({cartItemCount})</span>
    </div>
  );
}

function Cart() {
  return <div className="Cart">hello cart</div>;
}

function Product() {
  return <div className="Product">hello product</div>;
}

function Products() {
  return <div className="Products">hello products</div>;
}

const mapState2Props = store => {
  return {
    products: store.products,
    cart: store.cart,
    cartItemCount: store.cart.reduce((acc, cur) => acc + cur, 0)
  };
};

const mapDispatch2Props = dispatch => {
  return {
    addToCart: product => dispatch(addToCart(product)),
    deleteFromCart: productId => dispatch(deleteFromCart(productId))
  };
};

export default App;
