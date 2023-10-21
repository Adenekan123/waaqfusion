import {
  Container,
  Heading,
  HeroSub,
  ProductCarousel,
  Stack,
} from "@/components";
import React from "react";
import { GoFilter } from "react-icons/go";
import { most_loved } from "../../../../static";

const ShopPage = () => {
  return (
    <>
      <HeroSub page="Shop" />
      <Container styles="py-12">
        <Stack direction="flex-col" gap="gap-12">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
                  Kits
                </span>
              </div>
              <div>
                <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
                  courses
                </span>
              </div>

              <div>
                <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
                  Accessories
                </span>
              </div>
            </div>
            <GoFilter size={30} />
          </div>

          <Stack direction="flex-col" gap="gap-16">
          <section className="most-loved">
            <Stack direction="flex-col" gap="gap-8">
              <Heading type={2} title="Most Loved Kits"/>
              <ProductCarousel products={most_loved}/>
            </Stack>
          </section>
          <section className="beginners">
            <Stack direction="flex-col" gap="gap-8">
              <Heading type={2} title="Perfect for Beginnners"/>
              <ProductCarousel products={most_loved}/>
            </Stack>
          </section>
          <section className="education">
            <Stack direction="flex-col" gap="gap-8">
              <Heading type={2} title="Educational Kits (Perfect for Gifting)"/>
              <ProductCarousel products={most_loved}/>
            </Stack>
          </section>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default ShopPage;
