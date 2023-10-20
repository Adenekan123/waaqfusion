import {
  Body,
  CeoVideo,
  Container,
  CustomButton,
  FrameImage,
  Header,
  Heading,
  HeroWall,
  Solutions,
  Stack,
} from "@/components";
import Link from "next/link";
import React from "react";
import { BsCheck, BsPauseFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import { PiEyeClosed, PiMountains, PiSpeakerSimpleHigh } from "react-icons/pi";

const AboutPage = () => {
  return (
    <>
      <Header />
      <HeroWall>
        <Container styles="  h-full relative pt-48 pb-32">
          <div className="content text-center">
            <h1 className=" text-5xl md:text-6xl xl:text-7xl leading-tight  font-extrabold text-white">
              About Us
            </h1>

            <div className="flex gap-8 items-center justify-center text-white mt-8 font-bold text-xl">
              <Link href={"/"}>Home</Link>
              <BsPauseFill size={18} className="text-yellow-300" />
              <Body title="About us" />
            </div>
          </div>
        </Container>
      </HeroWall>

      <Container styles="py-12 md:py-24 bg-[url('/images/dashed.png')] bg-no-repeat bg-contain bg-right-bottom">
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
              <Body title=" WAAQ Fusion Integrated Services is a Lagos-based Ed-Tech startup founded in 2020 that aims to improve the existing education system with focus on educational consultancy which includes; Curriculum Development, School Strategic Planning, School Finance Training and Technology Integration." />

              <Body title="Besides, WAAQ Fusion is also a strong advocate of real-world and hands-on learning methodology, with strong bias for the followings;" />

              <Stack direction="flex-col" gap="gap-6">
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Coding" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Robotics" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Artificial Intelligence" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="Internet of Things (IoT)" />
                </div>
                <div className="flex gap-3">
                  <div className="text-green-500">
                    <BsCheck size={24} />
                  </div>
                  <Body title="3D Printing" />
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
      <CeoVideo />

      <Solutions />

      <section className=" py-12 md:py-24">
        <Container>
          <Stack direction="flex-col" gap="gap-12">
            <Heading
              title="The Power Of FutureBotics Intelligence."
              styles="w-full md:w-6/12 mx-auto text-center"
            />

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card text-center  p-6 rounded-md">
                <Stack direction="flex-col" gap="gap-8">
                  <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-orange-500 text-white">
                    <PiEyeClosed size={50} />
                  </div>
                  <Heading type={4} title="Vision" />
                  <Body title="Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do eiusmod tempor incie magna aliqua." />
                </Stack>
              </div>
              <div className="card text-center  p-6 rounded-md">
                <Stack direction="flex-col" gap="gap-8">
                  <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-violet-500 text-white">
                    <PiMountains size={50} />
                  </div>
                  <Heading type={4} title="Mission" />
                  <Body title="Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do eiusmod tempor incie magna aliqua." />
                </Stack>
              </div>
              <div className="card text-center  p-6 rounded-md">
                <Stack direction="flex-col" gap="gap-8">
                  <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-green-500 text-white">
                    <PiSpeakerSimpleHigh size={50} />
                  </div>
                  <Heading type={4} title="Motto" />
                  <Body title="Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do eiusmod tempor incie magna aliqua." />
                </Stack>
              </div>
            </div>
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
