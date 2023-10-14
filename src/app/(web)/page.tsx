import {
  Body,
  Container,
  CustomButton,
  FrameImage,
  Header,
  Heading,
  Hero,
  Stack,
} from "@/components";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container styles="py-12 md:py-24">
        <Stack gap="gap-12 md:gap-28">
          <div className="basis-6/12 relative">
            <div className="flex items-center justify-center play w-24 h-24 text-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 absolute  top-2/4 -translate-y-2/4 md:-right-10 right-2/4 translate-x-2/4 md:translate-x-0   z-10">
               <FaPlay size={30}/>
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
    </>
  );
};

export default Home;
