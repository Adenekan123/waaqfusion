import {
  BestSellers,
  Body,
  CeoVideo,
  Contacts,
  Container,
  CustomButton,
  Footer,
  FrameImage,
  Header,
  Heading,
  Hero,
  HeroWall,
  LearnBundle,
  Solutions,
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

      <Container styles="py-12 md:py-24 bg-[url('/images/dashed.png')] bg-no-repeat bg-contain bg-left-bottom">
        <Stack gap="gap-12 md:gap-28">
          <div className="basis-6/12 relative">
            <div className="flex items-center justify-center play w-20 h-20 md:w-24 md:h-24 text-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 absolute  top-2/4 -translate-y-2/4 md:-right-10 right-2/4 translate-x-2/4 md:translate-x-0   z-10">
              <FaPlay size={24} />
            </div>
            <FrameImage image="/images/kids-with-tablet.jpg" />
          </div>
          <div className="basis-6/12">
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

     <Solutions/>

      <CeoVideo/>

      <LearnBundle />

      <BestSellers />

      <section className="bg-[url('/images/female-teacher-helping-kids-in-robotics-lab.jpg')] bg-cover bg-center text-center md:text-left py-24 md:py-52 relative">
        <div className="overlay bg-gradient-to-r from-orange-800/70 to-orange-600/40 absolute top-0 left-0 w-full h-full"></div>
        <Container>
          <Stack direction="flex-col" gap="gap-8" styles="md:w-5/12">
            <Heading
              title="Creating Tomorrow's Tech Leaders through Robotics"
              styles="text-white"
            />
            <Body title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." styles="text-white " />
            <div>
              <CustomButton
                title="discover more"
                styles="font-bold uppercase"
              />
            </div>
          </Stack>
        </Container>
      </section>

      <Contacts />

      <Footer/>
    </>
  );
};

export default Home;
