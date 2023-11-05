import {
  Beginnners,
  Contacts,
  Container,
  Educational,
  Filter,
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
      <Filter />
      <Container styles="py-8" >
        <Stack direction="flex-col" gap="gap-12">

          <Stack direction="flex-col" gap="gap-16">
            <MostLoved />
            <Beginnners />
            <Educational />
          </Stack>
        </Stack>
      </Container>
      <Contacts />
    </>
  );
};

export default ShopPage;
