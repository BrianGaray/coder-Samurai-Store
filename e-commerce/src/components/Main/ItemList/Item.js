import React from "react";
import { Link } from "react-router-dom";

const Item = ({ items }) => {
  return (
    <div className="Items">
      <h1>{items.title}</h1>
      <h3>{items.category}</h3>
      <img src={items.img} alt=""></img>
      <h5>{items.price}</h5>
      <h5>{items.stock}</h5>
      <button>
        <Link to={`/item/${items.id}`}> details </Link>
      </button>
    </div>
  );
};

export default Item;
