import {
  BestSellers,
  CeoVideo,
  CompanyIntro,
  Contacts,
  Hero,
  LearnBundle,
  Solutions,
} from "@/components";
import HeroWithImg from "@/components/page/home/hero-with-img";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Solutions />
      <CeoVideo />
      <LearnBundle />
      <BestSellers />
      <HeroWithImg />
      <Contacts />
    </>
  );
};

export default Home;
