"use client";
import React, { useState } from "react";

import { useFetch } from "@/hooks";
import { Container, Heading, OrderCard } from "@/components/ui";
import { IMyOrderItem } from "@/types";
import { BsFillCartXFill } from "react-icons/bs";

const EmptyOrder = () => {
  return (
    <div className="flex flex-col gap-6 h-full items-center justify-center w-full">
      <div className="bg-green-50 border-green-300 text-red-400 mx-auto rounded-full w-48 h-48 flex items-center justify-center p-8">
        <BsFillCartXFill size={80} />
      </div>
      <Heading type={2} title="Empty Order" styles="text-red-500"/>
    </div>
  );
};

export const Myorders = () => {
  const [type, setType] = useState<"pending" | "successfull">("pending");
  const { data, isLoading } = useFetch(`/api/order/partner/${type}`);
  return (
    <>
      <div className=" shadow-lg flex justify-center gap-6">
        <button
          onClick={() => setType("pending")}
          className={`bg-transparent outline-none px-3 pt-6 pb-4 uppercase font-semibold ${
            type === "pending"
              ? "text-green-500 border-b-4 border-green-500"
              : "text-slate-500"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setType("successfull")}
          className={`bg-transparent outline-none px-3 pt-6 pb-4 uppercase font-semibold ${
            type === "successfull"
              ? "text-green-500 border-b-4 border-green-500"
              : "text-slate-500"
          }`}
        >
          Successful
        </button>
      </div>
      <Container styles="py-8">
        {data && Array.isArray(data) && data.length ? (
          <div className="grid grid-cols-1  md:grid-cols-4  gap-6">
            {data.map((order: IMyOrderItem, i: number) => (
              <div key={order.product.name.replaceAll(" ", "") + i}>
                <OrderCard orderItem={order} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyOrder />
        )}
      </Container>
    </>
  );
};
