import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/home" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
    </>
  );
}

export default Main;
