import React, { useState, useEffect } from "react";

const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  const [Count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial)
  }, [initial])

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

  const AddToCart = () => {
    onAdd(Count);
  };

  return (
    <div className="AddToCart">
      <button onClick={Add}>+</button>
      <button>{Count}</button>
      <button onClick={Remove}>-</button>
      <button onClick={AddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
