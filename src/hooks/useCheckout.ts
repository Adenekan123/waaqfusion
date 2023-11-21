import React, { useState } from "react";
import { useCartContext } from "@/contexts";
import { ICartItem, IOrderItem, IVisitor } from "@/types";
import { toast } from "react-toastify";

const reduceCartToOrderItems = (items: ICartItem[]): IOrderItem[] => {
  return items.reduce((acc: IOrderItem[], curr: ICartItem) => {
    const {
      productid,
      quantity,
      product: { price },
    } = curr;
    return [
      ...acc,
      { productid, quantity, totalAmount: price.curr * quantity },
    ];
  }, []);
};

const useCheckout = () => {
  const { state,emptycart} = useCartContext();
  const [status, setStatus] = useState({loading:false,success:false});

  const checkout_local = async (user: IVisitor) => {
    const checkFields = Object.keys(user).some(
      (field) => user[field as keyof IVisitor]
    );

    if (!checkFields) return toast.warning("Please enter all fields");
    setStatus(prev=>({...prev,loading:true}));
    try {
      const orderitems = reduceCartToOrderItems(state.products);
      const request = await fetch("/api/order/visitor", {
        method: "POST",
        body: JSON.stringify({ user, orderitems }),
      });
      const response = await request.json();
      if (response?.message) {
        emptycart();
        setStatus(prev=>({...prev,loading:false,success:true}));
        toast.success(response.message);
        localStorage.removeItem(
          process.env.NEXT_PUBLIC_LOCAL_CART_KEY as string
        );
      } else if (response?.error) throw new Error(response.error);
    } catch (err: any) {
      console.log(err?.message);
      setStatus(prev=>({...prev,loading:false}));
    }
  };

  const chackout = async () => {
    setStatus(prev=>({...prev,loading:true}));
    try {
      const orderitems = reduceCartToOrderItems(state.products);
      const request = await fetch("/api/order/partner", {
        method: "POST",
        body: JSON.stringify({ orderitems }),
      });
      const response = await request.json();
      if (response?.message) {
        emptycart();
        setStatus(prev=>({...prev,loading:false,success:true}));
        toast.success(response.message);
      } else if (response?.error) throw new Error(response.error);
    } catch (err: any) {
      console.log(err?.message);
      setStatus(prev=>({...prev,loading:false}));
    }
  };

  return { chackout, checkout_local, status };
};

export default useCheckout;
