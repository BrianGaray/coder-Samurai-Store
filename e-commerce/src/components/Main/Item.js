import React from "react";
import { Link } from "react-router-dom";

const Item = ({ items }) => {
  return (
    <div>
      <h1>{items.title}</h1>
      <h3>{items.category}</h3>
      <img src={items.img} alt=""></img>
      <h5>{items.price}</h5>
      <h5>{items.stock}</h5>
      <Link to={`/item/${items.id}`}>
 Details
      </Link>
    </div>
  );
};

export default Item;
