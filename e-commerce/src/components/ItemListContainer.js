//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import Products from "./Mock/products";


function ItemListContainer() {
  /* const onAdd = () => {
    alert("Se agrego al carrito");
  };*/
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(Products);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setItems(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/*<ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
