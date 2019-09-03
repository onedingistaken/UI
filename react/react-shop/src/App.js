import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addToCart } from "./store/actions/products";
import { addedToCart } from "./store/actions/cart";
import { deleteFromCart } from "./store/actions/cart";
import { deletedFromCart } from "./store/actions/products";
import { Route, Switch, Link, NavLink } from "react-router-dom";

function Navigation({ count, props }) {
  return (
    <div className="Navigation">
      <Link className="nav_products" to="/">
        Products
      </Link>
      <Link className="nav_cart" to="/cart">
        Cart&nbsp;({count})&nbsp;
      </Link>
    </div>
  );
}

function Cart({ props }) {
  const content =
    props.cart.length !== 0 ? (
      props.cart.map(product => (
        <Product key={product.id} product={product} tag="cart" props={props} />
      ))
    ) : (
      <p className="emptyMessage">Nothing here!</p>
    );
  return <div className="Cart">{content}</div>;
}

function Product({ product, tag, props }) {
  const currency = "USD";
  const renderPrice =
    currency === "USD" ? (
      <span>{"$" + product.price}</span>
    ) : (
      <span>{product.price}</span>
    );
  const renderButton =
    tag === "products" ? (
      <button className="product__addButton" onClick={() => renderAdd(product)}>
        Add to Cart
      </button>
    ) : (
      <button
        className="product__deleteButton"
        onClick={() => renderDelete(product)}
      >
        Remove
      </button>
    );
  const renderAdd = product => {
    // props.dispatch(addToCart(product.id));
    props.dispatch(addedToCart(product));
  };
  const renderDelete = product => {
    props.dispatch(deleteFromCart(product.id));
    props.dispatch(deletedFromCart(product));
  };
  return (
    <div className="Product">
      <div className="product_details">
        <span className="product__title">{product.title}</span>
        &nbsp;-&nbsp;
        {renderPrice}
        {tag === "cart" ? " (" + product.count + ")" : ""}
      </div>
      {renderButton}
    </div>
  );
}

function Products({ props }) {
  const content =
    props.products.length !== 0 ? (
      props.products
        .sort((a, b) => a.id - b.id)
        .map(product => (
          <Product
            key={product.id}
            product={product}
            tag="products"
            props={props}
          />
        ))
    ) : (
      <p className="emptyMessage">Nothing here!</p>
    );
  return <div className="Products">{content}</div>;
}

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navigation props={props} />
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => <Products props={props} />}
        />
        <Route path="/cart" render={() => <Cart props={props} />} />
      </Switch>
    </div>
  );
}

function mapState2Prop(store) {
  return {
    products: store.products,
    cart: store.cart
  };
}

export default connect(mapState2Prop)(App);
