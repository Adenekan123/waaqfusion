import React, { useState } from "react";
import { useCartContext } from "@/contexts";
import { ICartItem, IOrderItem, IVisitor } from "@/types";
import { toast } from "react-toastify";

const reduceCartToOrderItems = (
  items: ICartItem[]
): { orders: IOrderItem[]; totalamount: number } => {
  let totalamount = 0;
  const orders = items.reduce((acc: IOrderItem[], curr: ICartItem) => {
    const {
      productid,
      quantity,
      product: { price,_id },
    } = curr;
    totalamount += price.curr * quantity;
    return [...acc, { productid:_id, quantity }];
  }, []);

  return { orders, totalamount };
};

const useCheckout = () => {
  const { state, emptycart } = useCartContext();
  const [status, setStatus] = useState({ loading: false, success: false });

  const checkout_local = async (user: IVisitor) => {
    const checkFields = Object.keys(user).some(
      (field) => user[field as keyof IVisitor]
    );

    if (!checkFields) return toast.warning("Please enter all fields");
    setStatus((prev) => ({ ...prev, loading: true }));
    try {
      const { orders, totalamount } = reduceCartToOrderItems(state.products);
      const request = await fetch("/api/order/visitor", {
        method: "POST",
        body: JSON.stringify({
          user,
          orderitems: { items: orders, totalamount },
        }),
      });
      const response = await request.json();
      if (response?.message) {
        emptycart();
        setStatus((prev) => ({ ...prev, loading: false, success: true }));
        toast.success(response.message);
        localStorage.removeItem(
          process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string
        );
      } else if (response?.error) throw new Error(response.error);
    } catch (err: any) {
      console.log(err?.message);
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  };

  const chackout = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));
    try {
      const { orders, totalamount } = reduceCartToOrderItems(state.products);
      const request = await fetch("/api/order/partner", {
        method: "POST",
        body: JSON.stringify({ items: orders, totalamount }),
      });
      const response = await request.json();
      if (response?.message) {
        emptycart();
        setStatus((prev) => ({ ...prev, loading: false, success: true }));
        toast.success(response.message);
      } else if (response?.error) throw new Error(response.error);
    } catch (err: any) {
      console.log(err?.message);
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  };

  return { chackout, checkout_local, status };
};

export default useCheckout;
