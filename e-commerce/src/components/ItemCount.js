import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [Count, setCount] = useState(initial);

  const Add = () => {
    if (Count < stock) {
      setCount(Count + 1);
    } else {
      alert("maximo stock");
    }
  };

  const Remove = () => {
    Count > 1 && setCount(Count - 1);
  };

  return (
    <div class="AddToCart">
      <button onClick={Add}>+</button>
      <p>{Count}</p>
      <button onClick={Remove}>-</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
