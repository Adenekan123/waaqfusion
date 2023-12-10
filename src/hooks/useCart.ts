"use client";
import { cartReducer, cart_initial_state } from "@/reducers";
import { ICart, ICartItem, IProductCard } from "@/types";
import { useEffect, useReducer } from "react";
import { toast } from "react-toastify";

export interface IUseCart {
  state: ICart;
  addtocart: (product: IProductCard, quantity?: number) => Promise<void>;
  removefromcart: (productid: number) => Promise<void>;
  emptycart: () =>void;
  togglecart: () =>void;
}
const productToCart = (product: IProductCard, cartid: number) => {
  return {
    id: cartid,
    productid: product._id,
    quantity: 1,
    product: product,
  } as ICartItem;
};
const addtocart_local = (product: IProductCard) => {
  const carts = JSON.parse(
    localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string) as string
  ) as ICartItem[];

  if (carts) {
    const cartExist = carts.some((cart) => cart?.productid === product?._id);
    if (cartExist) {
      const newcarts = carts.map((cart) =>
        cart.productid === product._id
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      );
      localStorage.setItem(
        process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string,
        JSON.stringify(newcarts)
      );
      return { message: "Item updated", carts: newcarts };
    } else {
      const newcarts = [productToCart(product, carts.length + 1), ...carts];
      localStorage.setItem(
        process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string,
        JSON.stringify(newcarts)
      );
      return { message: "Item added", carts: newcarts };
    }
  } else {
    localStorage.setItem(
      process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string,
      JSON.stringify([productToCart(product, 1)])
    );
    return { message: "Item added", carts: [productToCart(product, 1)] };
  }
};
const removefromcart_local = (cartid: number) => {
  const carts = JSON.parse(
    localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string) as string
  ) as ICartItem[];
  const cartExist = carts.some((cart) => cart.id === cartid);
  if (cartExist) {
    const newcarts = carts.filter((cart) => cart.id !== cartid);
    localStorage.setItem(
      process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string,
      JSON.stringify(newcarts)
    );
    return { message: "Item deleted successfully", carts: newcarts };
  }
};
const getcarts_local = () => {
  const carts = JSON.parse(
    localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string) as string
  ) as ICartItem[];

  if (carts) return carts;
};

const addtocart_async = async (product: IProductCard, quantity?: number) => {
  return await (
    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productid: product._id, quantity: !quantity ? 1: quantity }),
    })
  ).json();
};

const removefromcart_async = async (cartid: number) => {
  return await (
    await fetch(`/api/cart?cartid=${cartid}`, {
      method: "DELETE",
    })
  ).json();
};
const getcarts_async = async () => await (await fetch(`/api/cart`)).json();

export const useCart = (type: "online" | "offline") => {
  const [state, dispatch] = useReducer(cartReducer, cart_initial_state);
  const addtocart = async (product: IProductCard, quantity?: number) => {
    dispatch({ type: "addingToCart_pending" });
    try {
      const response =
        type === "offline"
          ? addtocart_local(product)
          : await addtocart_async(product, quantity);
      if (response) {
        dispatch({ type: "addingToCart_successful", payload: response.carts });
        toast.success(response.message);
      } else throw new Error("Unable to add to cart");
    } catch (err: any) {
      dispatch({ type: "addingToCart_failure" });
      toast.error(err?.message);
    }
  };

  const removefromcart = async (cartid: number) => {
    dispatch({ type: "deletingFromCart_pending" });
    try {
      const response =
        type === "offline"
          ? removefromcart_local(cartid)
          : await removefromcart_async(cartid);

      if (response && response.message && Array.isArray(response.carts)) {
        dispatch({
          type: "deletingFromCart_successful",
          payload: response.carts,
        });
        toast.success(response.message);
      }
    } catch (err: any) {
      dispatch({ type: "deletingFromCart_failure" });
      toast.error(err?.message);
    }
  };

  const getAllcarts = async () => {
    
    dispatch({ type: "carts_pending" });
    try {
      const carts = type === "offline" ? getcarts_local() : await getcarts_async();
      if (carts && Array.isArray(carts))
        dispatch({ type: "carts_successful", payload: carts });
      else throw new Error("Unable to fetch carts");
    } catch (err: any) {
      dispatch({ type: "carts_failure" });
      // toast.error(err?.message);
    }
  };

  const emptycart = ()=>{
    localStorage.removeItem(process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string);
    dispatch({type:"reset_cart"})
  }

  const togglecart = () => dispatch({type:"toggle_cart"})

  const set_total_carts = () => dispatch({ type: "update_cart" });

  useEffect(() => {
    getAllcarts();
  }, [type]);

  useEffect(() => {
    set_total_carts();
  }, [state.products]);

  return { state, addtocart, removefromcart, getAllcarts,togglecart, set_total_carts,emptycart };
};
