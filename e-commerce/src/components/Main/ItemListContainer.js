//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import Products from "../components/Mock/products";
import { useParams } from 'react-router-dom'


function ItemListContainer() {
  /* const onAdd = () => {
    alert("Se agrego al carrito");
  };*/

  const [items, setItems] = useState([]);
  const { categoryId }= useParams()

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const prodFilter = Products.filter(
        (prod)=> prod.category === categoryId
      )
      setTimeout(() => {
        res(categoryId ? prodFilter : Products);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setItems(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <>
      {/*<ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
