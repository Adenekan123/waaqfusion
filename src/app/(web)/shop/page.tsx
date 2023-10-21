import {
  Beginnners,
  Contacts,
  Container,
  Educational,
  Heading,
  HeroSub,
  MostLoved,
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
            <MostLoved />
            <Beginnners />
            <Educational />
          </Stack>
        </Stack>
      </Container>
      <Contacts/>

    </>
  );
};

export default ShopPage;
