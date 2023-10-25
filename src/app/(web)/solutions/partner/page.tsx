import {
  Body,
  Contacts,
  Container,
  Heading,
  HeroSub,
  SchoolIntro,
  Stack,
} from "@/components";
import React from "react";

const SchoolPage = () => {
  return (
    <>
      <HeroSub
        page="Solutions / Partner"
        color="bg-violet-500"
        gradient="from-violet-600/80 to-violet-700"
      />
     
      <Contacts />
    </>
  );
};

export default SchoolPage;
