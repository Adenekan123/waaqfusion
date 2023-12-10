"use client";
import { useCartContext } from "@/contexts";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export const FloatingCartButton = () => {
    const {togglecart} = useCartContext()
  return (
    <div onClick={()=>togglecart()} className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-400  justify-center items-center text-white fixed bottom-36 right-8 flex md:hidden z-50 shadow-lg shadow-red-400">
      <FaCartShopping size={24} />
    </div>
  );
};

