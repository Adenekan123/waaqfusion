import { Heading, ProductCarousel, Stack } from "@/components/ui";
import React from "react";
import { most_loved } from "../../../../static";

export const MostLoved = () => {
  return (
    <section className="most-loved">
      <Stack direction="flex-col" gap="gap-8">
        <Heading type={2} title="Most Loved Kits" />
        <ProductCarousel products={most_loved} />
      </Stack>
    </section>
  );
};

