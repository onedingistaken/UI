import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "./store/actions";

function App(props) {
  return (
    <div className="App">
      <Nav props={props} />
      <Switch>
        <Route path="/" exact render={() => <Products props={props} />} />
        <Route path="/cart" exact render={() => <Cart props={props} />} />
      </Switch>
    </div>
  );
}

function Nav({ props }) {
  return (
    <div className="Nav">
      <Link to="/">Products</Link>
      <Link to="/cart">Cart({props.cartItemCount})</Link>
    </div>
  );
}

function Products({ props }) {
  return (
    <div className="Products">
      {props.products &&
        props.products.map((product, index) => (
          <Product
            key={index}
            product={product}
            props={props}
            parent="Products"
          />
        ))}
    </div>
  );
}

function Product({ product, props, parent }) {
  const productButton =
    parent === "Products" ? (
      <button
        className="product__addToCartBtn"
        onClick={() => props.addToCart(product)}
      >
        {parent === "Products" ? "Add to Cart" : "Remove from Cart"}
      </button>
    ) : (
      <button
        className="product__addToCartBtn"
        onClick={() => props.deleteFromCart(product.id)}
      >
        {parent === "Products" ? "Add to Cart" : "Remove from Cart"}
      </button>
    );

  const productQuantity = (
    <span>&nbsp;x&nbsp;{product.quantity && product.quantity}</span>
  );

  return (
    <div className="Product">
      <span className="product_details">
        <span className="product__title">{product.title}</span>
        &nbsp;-&nbsp;
        <span className="product__price">${product.price}</span>
        {parent === "Cart" ? productQuantity : false}
      </span>
      {productButton}
    </div>
  );
}

function Cart({ props }) {
  return (
    <div className="Cart">
      {props.cart.length === 0 ? (
        <p className="emptyWarning">Your cart is currently empty!</p>
      ) : (
        props.cart.map((product, index) => (
          <Product key={index} product={product} props={props} parent="Cart" />
        ))
      )}
    </div>
  );
}

function mapStateToProps(store) {
  return {
    products: store.products,
    cart: store.cart,
    cartItemCount:
      store.cart && store.cart.reduce((acc, cur) => acc + cur.quantity, 0)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: product => dispatch(addToCart(product)),
    deleteFromCart: productId => dispatch(deleteFromCart(productId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
