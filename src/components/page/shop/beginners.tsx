import { Heading, ProductCarousel, Stack } from "@/components/ui";
import React from "react";
import { most_loved } from "../../../../static";

export const Beginnners = () => {
  return (
    <section className="beginners">
      <Stack direction="flex-col" gap="gap-8">
        <Heading type={2} title="Perfect for Beginnners" />
        <ProductCarousel products={most_loved} />
      </Stack>
    </section>
  );
};

