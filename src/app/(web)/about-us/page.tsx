import {
  CeoVideo,
  CompanyIntro,
  Contacts,
  HeroSub,
  MissionVision,
  Solutions,
} from "@/components";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <HeroSub page="About us" />
      <CompanyIntro />
      <MissionVision />
      <CeoVideo />
      <Solutions />
      <Contacts />
    </>
  );
};

export default AboutPage;
