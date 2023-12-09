"use client";
import { Body, CustomButton, Heading } from "@/components/ui";
import CartItem from "@/components/ui/cart-item";
import { useCartContext } from "@/contexts";
import useCheckout from "@/hooks/useCheckout";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import CheckoutForm from "./checkout-form";
import { useRouter } from "next/navigation";

export const Cart = ({ close }: { close: (v?: boolean) => any }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { state,togglecart } = useCartContext();
  const { chackout, status } = useCheckout();
  const [visitor, setVisitor] = useState(false);
const gotoShop = () =>{
  togglecart();
  router.push("/shop");
}
  return (
    <div className="flex flex-col h-full relative">
      <div className="py-3 px-6 border-b flex justify-between items-center">
        <Heading title="My Cart" type={3} />
        <button
          className=" bg-transparent border-0 outline-0"
          onClick={() => close()}
        >
          <CgClose size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-4 h-[80vh] p-6 overflow-hidden overflow-y-auto">
        {state?.products &&
        Array.isArray(state.products) &&
        state?.products.length ? (
          state?.products.map((product) => (
            <CartItem key={"cart" + product?.id} {...product} />
          ))
        ) : (
          <div className="flex flex-col gap-12 my-auto ">
            <div className="bg-orange-200 text-orange-500 px-3 py-12 flex justify-center rounded-lg  md:w-[60%] mx-auto">
              <BsCart4 size={120} />
            </div>
            <div className="text-center">
              <Heading title="Your Cart is Empty" type={2} />
              <Body
                title="Looks like you haven't added anything to your cart yet. Go ahead and explore our products"
                styles="my-3"
              />
              <CustomButton title="Shop Now" styles="shadow-2xl font-bold" gradient="from-green-400 to-green-600" whenClicked={gotoShop} />
            </div>
          </div>
        )}
      </div>
      {state?.products.length ? (
        <div className="mt-auto border-t py-3 px-6 pt-6 text-center">
          <h3 className={`text-lg md:text-xl font-bold mb-4`}>
            Total: &#8358;
            {state.price.toLocaleString("en", { minimumFractionDigits: 2 })}
          </h3>
          <CustomButton
            title="Checkout"
            styles="font-bold w-full shadow-2xl py-3 uppercase"
            gradient="from-green-500 to-green-600"
            loading={status.loading}
            whenClicked={() => (session?.user ? chackout() : setVisitor(true))}
          />
        </div>
      ) : null}

      {visitor ? <CheckoutForm close={() => setVisitor(false)} /> : null}
    </div>
  );
};
