import {
  Contacts,
  HeroSub,
  Products,
} from "@/components";
import React from "react";

const ShopPage = () => {
  return (
    <>
      <HeroSub page="Shop" />
      <Products/>
      <Contacts />
    </>
  );
};

export default ShopPage;
