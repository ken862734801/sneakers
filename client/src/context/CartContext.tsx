import { createContext, useContext, useEffect, useState } from "react";
import { ShoppingCartContextType } from "../components/common/types";

export const CartContext = createContext<ShoppingCartContextType>({
  cart: [],
  setCart(cart) {},
});

export const CartProvider = (props: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};