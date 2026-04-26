import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //logic
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  //pizza, burger, fried rice
  const removeCart = (id) => { //2
    setCart((prev) => prev.filter((item) => item.id === id));
  };

  return (
  <CartContext.Provider value={{ cart, addCart, removeCart }}>
    {children}
  </CartContext.Provider>
);

};