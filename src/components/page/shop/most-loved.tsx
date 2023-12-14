"use client";
import { Heading, ProductCarousel, Stack } from "@/components/ui";
import React from "react";
import { useFetch } from "@/hooks";
import { nanoid } from "nanoid";
import { ProductLoader } from "../shared";

export const MostLoved = () => {
  const { data, isLoading } = useFetch("/api/products/mostloved_kits");
  return (
    <section className="most-loved">
      {isLoading ? (
        <>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-6 animate-pulse"></div>
          <ProductLoader count={4} />
        </>
      ) : (
        <Stack direction="flex-col" gap="gap-8">
          <Heading type={2} title="Most Loved Kits" />
          <ProductCarousel products={data} />
        </Stack>
      )}
    </section>
  );
};
