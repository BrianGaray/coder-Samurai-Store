import React from "react";
import { Link } from "react-router-dom";

const CartDetail = ({ prod, removeItem, total }) => {
  return (
    <div className="products-cart">
      <div className="img-title">
        <h1>{prod.title}</h1>
        <img src={prod.img} alt=""></img>
        <button onClick={() => removeItem(prod.id)}> Remove </button>
      </div>

      <div className="subtotal">
        <h2> quantity: {prod.quantity}</h2>
        <h2> Subtotal: {total} US$</h2>

        <button>
          <Link to="/checkout">Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
