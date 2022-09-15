import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  return (
    <div>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <button onClick={() => removeItem(prod.id)}> Remove </button>
        </div>
      ))}
      <button onClick={clear}>clear all</button>
    </div>
  );
};

export default Cart;
