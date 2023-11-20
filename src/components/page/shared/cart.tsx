import { Body, CustomButton, Heading } from "@/components/ui";
import CartItem from "@/components/ui/cart-item";
import { useCartContext } from "@/contexts";
import React from "react";
import { BsCart, BsCart4 } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

export const Cart = ({close}:{close:(v?:boolean)=>any}) => {
  const { state } = useCartContext();
  return (
    <div className="flex flex-col h-full">
      <div className="py-3 px-6 border-b flex justify-between items-center">
        <Heading title="My Cart" type={3} />
        <button className=" bg-transparent border-0 outline-0" onClick={()=>close()}>
          <CgClose size={24} />
        </button>
      </div>
      <div className="flex flex-col gap-4 h-[80vh] p-6 overflow-hidden overflow-y-auto">
        {state?.products &&
        Array.isArray(state.products) &&
        state.products.length ? (
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
              <Body title="Looks like you haven't added anything to your cart yet. Go ahead and explore our products" styles="my-3" />
              <CustomButton title="Shop Now" styles="shadow-2xl"  />
            </div>
          </div>
        )}
      </div>
      <div className="mt-auto border-t py-3 px-6 pt-6 text-center">
        <h3 className={`text-lg md:text-xl font-bold mb-4`}>Total: &#8358;{state.price.toLocaleString("en",{minimumFractionDigits:2})}</h3>
        <CustomButton title="Checkout" styles="font-bold w-full shadow-2xl py-3 uppercase" gradient="from-green-500 to-green-600" />
      </div>
    </div>
  );
};
