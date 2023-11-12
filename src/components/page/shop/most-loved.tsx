"use client"
import { Heading, ProductCarousel, Stack } from "@/components/ui";
import React from "react";
import { most_loved } from "../../../../static";
import { useFetch } from "@/hooks";

export const MostLoved = () => {
 const {data,isLoading} = useFetch('/api/products/mostloved_kits');
  return (
    <section className="most-loved">
      <Stack direction="flex-col" gap="gap-8">
        <Heading type={2} title="Most Loved Kits" />
        <ProductCarousel products={data} />
      </Stack>
    </section>
  );
};

