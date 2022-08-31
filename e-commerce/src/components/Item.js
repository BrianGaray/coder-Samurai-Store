import React from "react";

const Item = ({ items }) => {
  return (
    <div>
      <h1>{items.title}</h1>
      <h3>{items.category}</h3>
      <img src={items.img} alt=""></img>
      <h5>{items.price}</h5>
      <h5>{items.stock}</h5>
    </div>
  );
};

export default Item;
