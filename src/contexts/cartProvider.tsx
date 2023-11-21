"use client";

import { IUseCart, useCart } from "@/hooks";
import { cart_initial_state } from "@/reducers";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext, useEffect } from "react";

export const initial_context: IUseCart = {
  state: cart_initial_state,
  addtocart: async () => {},
  removefromcart: async () => {},
  emptycart:  () => {},
  togglecart:  () => {},
};

export const CartContext = createContext(initial_context);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const { state, addtocart, removefromcart,emptycart,togglecart } = useCart(
    session?.user ? "online" : "offline"
  );

  const value = { state, addtocart, removefromcart,emptycart,togglecart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to consume the cart context
export const useCartContext = () => {
  return useContext(CartContext);
};
