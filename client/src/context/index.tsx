import { createContext, useContext } from "react";
import { AppState } from "../components/common/types";

type AppContextValue = {
    state: AppState;
  };
  
  export const Context = createContext<AppContextValue>({
    state: {cart: []},
  });