"use client";
import React, { useState } from "react";

import { useFetch } from "@/hooks";
import { Container, Heading, OrderCard } from "@/components/ui";
import { IMyOrderItem, IOrderItem } from "@/types";
import { BsFillCartXFill } from "react-icons/bs";
import { nanoid } from "nanoid";

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
          <div
            className="grid grid-cols-1  md:grid-cols-4  gap-6"
            key={nanoid(6)}
          >
            {Array.from(Array(4)).map((_) => (
              <div
                key={nanoid(5)}
                role="status"
                className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4">
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ))}
          </div>
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
