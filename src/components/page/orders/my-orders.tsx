"use client";
import React, { useState } from "react";

import { useFetch } from "@/hooks";
import { Container, Heading, OrderCard } from "@/components/ui";
import { IMyOrderItem, IOrderItem } from "@/types";
import { BsFillCartXFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import { ProductLoader } from "../shared";

const EmptyOrder = () => {
  return (
    <div className="flex flex-col gap-6 h-full items-center justify-center w-full py-12">
      <div className="bg-green-50 border-green-300 text-red-400 mx-auto rounded-full w-48 h-48 flex items-center justify-center p-8">
        <BsFillCartXFill size={80} />
      </div>
      <Heading type={2} title="Empty Order" styles="text-red-500" />
    </div>
  );
};

export const Myorders = () => {
  const [type, setType] = useState<"pending" | "successfull">("pending");
  const { data, isLoading } = useFetch(`/api/order/partner/${type}`);
  console.log(data);
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
        {isLoading ? (
          <ProductLoader count={4} />
        ) : data && Array.isArray(data) && data.length ? (
          data.map((order: IMyOrderItem) => {
            const { orders, status, totalamount } = order;
            return (
              <div key={nanoid(6)}>
                <div
                  className="grid grid-cols-1  md:grid-cols-4  gap-6"
                  key={nanoid(6)}
                >
                  {orders.map((item: IOrderItem) => (
                    <OrderCard key={nanoid(8)} orderItem={item} />
                  ))}
                </div>
              </div>
            );
          })
        ) : null}

        {!isLoading &&
        (!Array.isArray(data) || (Array.isArray(data) && !data.length)) ? (
          <EmptyOrder />
        ) : null}
      </Container>
    </>
  );
};
