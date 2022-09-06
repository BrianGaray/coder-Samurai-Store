
import {OneProduct} from "./Mock/products";
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
    const [items, setItems] = useState({});
  
    useEffect(() => {
      const getProducts = new Promise((res, rej) => {
        setTimeout(() => {
          res(OneProduct);
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
     <ItemDetail items={items} key={items.id}/>;
      </>
    );
  }
    
  
  


export default ItemDetailContainer;
