import React from "react";
import ItemListContainer from "./ItemList/ItemListContainer";
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Cart from '../Header/Nav/Cart'

function Main() {
  return (
    <main className="Main">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </main>
  );
}

export default Main;
