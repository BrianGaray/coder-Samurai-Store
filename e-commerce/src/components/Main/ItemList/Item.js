import React from "react";
import { Link } from "react-router-dom";

const Item = ({ items }) => {
  return (
    <section className="flip-card">
      <div className="flip-card-front">
        <div className="inner">
          <img src={items.img} alt=""></img>
        </div>
      </div>
      <div className="flip-card-back">
        <div className="inner">
          <h3>{items.title}</h3>
          <h5>{items.price} US$</h5>
          <button>
            <Link to={`/item/${items.id}`}> details </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Item;
