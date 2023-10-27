import {
  Contacts,
  HeroSub,
  PartnerBenefits,
  PartnershipForm,
  Partnertro,
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
      <Partnertro />
      <PartnerBenefits />
      <PartnershipForm />
      <Contacts />
    </>
  );
};

export default SchoolPage;
