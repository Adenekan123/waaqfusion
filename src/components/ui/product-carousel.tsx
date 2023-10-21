"use client";
import { IProductCard } from "@/types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { ProductCard } from "./product-card";
import { nanoid } from "nanoid";

export const ProductCarousel = ({ products }: { products: IProductCard[] }) => {
  return (
    <div className="relative">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: false,
          type: "loop",
          gap: "1rem",
          padding: {right:'2rem'},
          perPage: 4,
          perMove: 1,
          breakpoints: {
            800: { perPage: 1 },
            1200: { perPage: 2 },
            1500: { perPage: 3 },
          },
        }}
      >
        {products && Array.isArray(products) && products.length
          ? products.map((product) => (
              <SplideSlide key={nanoid(5)}>
                <ProductCard {...product} />
              </SplideSlide>
            ))
          : null}
      </Splide>
    </div>
  );
};
