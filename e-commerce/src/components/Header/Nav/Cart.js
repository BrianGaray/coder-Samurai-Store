import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearAll, removeItem, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  if (cart.length === 0) {
    return (
      <>
        <h2>carrito vacio</h2>
        <button>
          <Link to="/">Home</Link>
        </button>
      </>
    );
  }

  return (
    <div className="cart">
      {cart.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.title}</h1>
          <h2> quantity: {prod.quantity}</h2>
          <h2> Subtotal:{total} US$</h2>
          <button onClick={() => removeItem(prod.id)}> Remove </button>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      ))}
      <button onClick={clearAll}>clear all</button>
    </div>
  );
};

export default Cart;
