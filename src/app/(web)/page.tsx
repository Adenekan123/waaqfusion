import {
  BestSellers,
  Body,
  Container,
  CustomButton,
  FrameImage,
  Header,
  Heading,
  Hero,
  HeroWall,
  LearnBundle,
  Stack,
} from "@/components";
import Image from "next/image";
import React from "react";
import { BsCheck, BsRobot } from "react-icons/bs";
import { FaPlay, FaSchool } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { RiHomeOfficeFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <Container styles="py-12 md:py-24">
        <Stack gap="gap-12 md:gap-28">
          <div className="basis-6/12 relative">
            <div className="flex items-center justify-center play w-20 h-20 md:w-24 md:h-24 text-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 absolute  top-2/4 -translate-y-2/4 md:-right-10 right-2/4 translate-x-2/4 md:translate-x-0   z-10">
              <FaPlay size={24} />
            </div>
            <FrameImage image="/images/kids-with-tablet.jpg" />
          </div>
          <div className="basis-6/12 ">
            <Stack direction="flex-col" styles="gap-8">
              <Heading title="Unleashing the Power of Robotics for Young Innovators." />
              <Body
                title=" Adipiscing conubia porta sit fusce euismod venenatis. Aenean
                enim parturient mauris curabitur feugiat. Facilisi venenatis per
                pulvinar eros habitant pede fames mollis."
              />

              <Stack direction="flex-col" gap="gap-6">
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Non letius diam sapien" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Mauris inceptos dis penatibus" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Tellus iaculis massa sociosqu egestas" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Convallis in neque primis" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Natoque nulla dictum pretium" />
                </div>
              </Stack>
              <div>
                <CustomButton
                  title="learn more"
                  styles="shadow-2xl uppercase font-bold"
                />
              </div>
            </Stack>
          </div>
        </Stack>
      </Container>

      <HeroWall>
        <Container styles="pt-12 md:pt-20 md:mt-44 pb-12 md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 relative md:-top-44">
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-112">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center">
                    <FaSchool size={40} />
                  </div>
                </div>
                <Heading title="schools" type={3} styles="capitalize" />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg uppercase"
                  />
                </div>
              </Stack>
            </div>
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-96">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center">
                    <ImUsers size={40} />
                  </div>
                </div>
                <Heading title="partners" type={3} styles="capitalize" />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg uppercase"
                  />
                </div>
              </Stack>
            </div>
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-96">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-white flex items-center justify-center">
                    <RiHomeOfficeFill size={40} />
                  </div>
                </div>
                <Heading title="labs" type={3} styles="capitalize" />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg uppercase"
                  />
                </div>
              </Stack>
            </div>
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-96">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center">
                    <BsRobot size={40} />
                  </div>
                </div>
                <Heading
                  title="robotics classroom bundle"
                  type={3}
                  styles="capitalize"
                />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg uppercase"
                  />
                </div>
              </Stack>
            </div>
          </div>

          <div className="md:flex relative mt-12 md:mt-0 md:-top-20">
            <div className="basis-4/12">
              <Heading
                styles="text-white md:leading-12"
                title="Trusted globally by world-class brands and organizations of all sizes."
              />
            </div>
            <div className="basis-8/12 mt-8 md:mt-0">
              <div className="grid grid-cols-3  md:grid-cols-4 gap-x-16 gap-y-2 items-center">
                <div>
                  <Image
                    src={"/images/awards-1.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/awards-2.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/awards-3.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/awards-5.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/awards-6.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/awards-7.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/awards-4.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <Image
                    src={"/images/awards-8.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </HeroWall>

      <div className="ceo-video">
        <Container styles="py-20 md:py-24 ">
          <div className="md:flex items-center">
            <div className="basis-7/12 text-center md:text-left">
              <Stack gap="gap-4" direction="flex-col">
                <Heading type={1} title="Why?" styles="text-orange-500"/>
                <Heading type={1} title="What?" styles="text-violet-500" />
                <Heading type={1} title="How?" styles="text-green-500" />
              </Stack>
              <p className="text-md md:text-xl mt-4 mb-12">Hear about our Approach from the founders themselves...</p>
            </div>
            <div className="basis-5/12 relative">
              <FrameImage image="/images/why-what-how-desktop.webp" />
              <div className="flex items-center justify-center play w-20 h-20 md:w-24 md:h-24 text-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 absolute  top-2/4 -translate-y-2/4 md:-left-10 left-2/4 -translate-x-2/4 md:translate-x-0 z-10">
              <FaPlay size={24} />
            </div>
            </div>
          </div>
        </Container>
      </div>
     
     <LearnBundle/>

     <BestSellers/>
      
    </>
  );
};

export default Home;
