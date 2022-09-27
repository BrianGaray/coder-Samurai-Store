import { createContext, useState } from "react";
//exp
export const CartContext = createContext();

//component

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Add to cart
  const addToCart = (items, quantity) => {
    if (isInCart(items.id)) {
      totalQuantitySingleProduct(items, quantity);
      //alert("ya esta en el carrit"o)
    } else {
      setCart([...cart, { ...items, quantity }]);
    }
  };

  //Is in cart
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //Total quantity single product

  const totalQuantitySingleProduct = (items, quantity) => {
    const updateCart = cart.map((prod) =>
      prod.id === items.id
        ? { ...prod, quantity: prod.quantity + quantity }
        : prod
    );
    setCart(updateCart);
  };

  //Remove a product
  const removeItem = (id) => {
    const CartFilter = cart.filter((prod) => prod.id !== id);
    setCart(CartFilter);
    console.log(`Remove product ${id}`);
  };

  //Remove all products
  const clearAll = () => {
    setCart([]);
  };

  //total quantity of products
  const totalQuantity = () => {
    let count = 0;
    cart.forEach((prod) => {
      count += prod.quantity;
    });
    return count;
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.price * prod.quantity;
    });
    return total;
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearAll,
        totalQuantity,
        totalPrice,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
