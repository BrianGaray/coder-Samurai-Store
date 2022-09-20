import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cartNumber">
      <span className="material-icons">shopping_cart </span>
      <span>{totalQuantity() === 0 ? "" : totalQuantity()}</span>
    </div>
  );
}

export default CartWidget;
