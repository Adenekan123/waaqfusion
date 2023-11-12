"use client";

import { Heading, ProductCarousel, Stack } from "@/components/ui";
import React from "react";

import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import { useFetch } from "@/hooks";
export const Educational = () => {
  const { data, isLoading } = useFetch("/api/products/educational");

  return (
    <section className="education">
      <Stack direction="flex-col" gap="gap-8">
        <Heading type={2} title="Educational Kits (Perfect for Gifting)" />
        <ProductCarousel products={data} />
      </Stack>
    </section>
  );
};
