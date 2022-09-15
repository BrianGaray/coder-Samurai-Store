import { createContext, useState } from "react";
//exp
export const CartContext = createContext();

//component

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Add to cart
  const addToCart = (items, quantity) => {
    //Is in cart
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id);
    };
    if (isInCart(items.id)) {
      alert("ya esta en el carrito");
    } else {
      setCart([...cart, { ...items, quantity }]);
    }
  };
  //Remove a product
  const removeItem = (id) => {
    const CartFilter = cart.filter((prod) => prod.id !== id);
    setCart(CartFilter);
    console.log(`Remove product ${id}`);
  };

  //Remove all products
  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
