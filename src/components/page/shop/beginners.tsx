"use client"
import { Heading, ProductCarousel, Stack } from "@/components/ui";
import React from "react";
import { most_loved } from "../../../../static";
import { useFetch } from "@/hooks";

export const Beginnners = () => {
  const {data,isLoading} = useFetch('/api/products/beginners');
  return (
    <section className="beginners">
      <Stack direction="flex-col" gap="gap-8">
        <Heading type={2} title="Perfect for Beginnners" />
        <ProductCarousel products={data} />
      </Stack>
    </section>
  );
};

