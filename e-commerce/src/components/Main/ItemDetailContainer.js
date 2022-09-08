
import Products from "../components/Mock/products";
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [items, setItems] = useState({});
    const { id }= useParams()
    useEffect(() => {
      const getProducts = new Promise((res, rej) => {
        const prodFetch = Products.fetch(
          (prod)=> prod.id === id
        )
        console.log(id)
        setTimeout(() => {
          res(id ? prodFetch : Products);
        }, 2000);
      });
      getProducts
        .then((data) => {
          setItems(data);
        })
  
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    return (
      <>
     <ItemDetail items={items} key={items.id}/>;
      </>
    );
  }
    
  
  


export default ItemDetailContainer;