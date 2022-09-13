import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./Count/ItemCount";

const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
  };

  console.log(items);
  return (
    <section className="ItemDetail">
      <h1>{items.title}</h1>
      <img src={items.img} alt=""></img>
      <p>{items.description}</p>
      <h5>{items.price}$</h5>
      {quantity === 0 ? (
        <ItemCount initial={1} stock={items.stock} onAdd={onAdd} />
      ) : (
        <button>
          <Link to="/cart">ir al carrito</Link>
        </button>
      )}
    </section>
  );
};

export default ItemDetail;
