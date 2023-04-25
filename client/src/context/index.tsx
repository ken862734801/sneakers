import { createContext, useContext } from "react";
import {ShoppingCartContextType, ShoppingCartState } from "../components/common/types";

export const CartContext = createContext<ShoppingCartContextType>({
  cart:[]
});
