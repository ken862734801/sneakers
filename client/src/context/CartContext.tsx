import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItemType } from "../components/common/types";

interface CartContextProps {
  cart: CartItemType[];
  setCart: (cart: CartItemType[]) => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItemType[]>(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
