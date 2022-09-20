import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import Products from "../../Mock/products";
import { useParams } from "react-router-dom";
import "../../../css/ItemList.css";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const prodFilter = Products.filter(
        (prod) => prod.category === categoryId
      );
      setTimeout(() => {
        res(categoryId ? prodFilter : Products);
      }, 1000);
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
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
