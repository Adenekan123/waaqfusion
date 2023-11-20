"use client";
import React from "react";
import { MostLoved } from "./most-loved";
import { Beginnners } from "./beginners";
import { Educational } from "./educational";
import { useProductFetch } from "@/hooks";
import { Filter } from "./filter";
import { Container, Heading, ProductCard, Stack } from "@/components/ui";
import { IProductCard } from "@/types";

export const Products = () => {
  const { products, filter, setFilter, applyFilter } = useProductFetch();
  return (
    <>
      <Filter setFilter={setFilter} filter={filter} applyFilter={applyFilter} />
      <Container styles="py-8">
        <Stack direction="flex-col" gap="gap-12">
          {!products.data.length ? (
            <Stack direction="flex-col" gap="gap-16">
              <MostLoved />
              <Beginnners />
              <Educational />
            </Stack>
          ) : (
            <div className="flex flex-col gap-12">
              <Heading title={`Filtered Result ${products.data.length}`} />
              <div className="grid grid-cols-1  md:grid-cols-4  gap-6">
                {products && Array.isArray(products.data)
                  ? products.data.map((product: IProductCard, i: number) => (
                      <div key={product.name.replaceAll(" ", "") + i}>
                        <ProductCard {...product} />
                      </div>
                    ))
                  : null}
              </div>
            </div>
          )}
        </Stack>
      </Container>
    </>
  );
};
