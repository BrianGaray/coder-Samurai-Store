import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import ItemCount from "./Count/ItemCount";

const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, getProductQuantity } = useContext(CartContext);

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
    addToCart(items, quantityToAdd);
  };
  const ProductQuantity = getProductQuantity(items.id);

  return (
    <section className="ItemDetail">
      <h1>{items.title}</h1>
      <div className="desc">
        <img loading="lazy" src={items.img} alt=""></img>
        <div className="info">
          <p>{items.description}</p>
          <h5>{items.price}$</h5>

          {quantity === 0 ? (
            <ItemCount
              initial={ProductQuantity}
              stock={items.stock}
              onAdd={onAdd}
            />
          ) : (
            <button>
              <Link to="/cart">ir al carrito</Link>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
