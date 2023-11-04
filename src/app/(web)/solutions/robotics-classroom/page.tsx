"use client";
import {
  Body,
  Contacts,
  Container,
  CustomButton,
  Heading,
  HeroSub,
  ProductRating,
  SchoolIntro,
  Stack,
} from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineAbc, MdOutlineListAlt, MdSupport } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { ImStack } from "react-icons/im";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { nanoid } from "nanoid";
import { classroomsPackages } from "../../../../../static";
const RoboticsClassroomPage = () => {
  const mainRef = useRef<Splide>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbs = (id: number) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };
  useEffect(() => {
    mainRef?.current?.splide?.on("moved", () => {
      if (mainRef && mainRef?.current && mainRef.current.splide) {
        setCurrentIndex(mainRef.current?.splide.index);
      }
    });
  }, [mainRef]);
  return (
    <>
      <HeroSub
        page="Solutions / Robotics Classroom Bundle"
        color="bg-green-500"
        gradient="from-gray-600/80 to-gray-700"
      />

      <Container styles="py-12 md:py-24">
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="basis-full md:basis-2/12 order-last md:order-first">
            <Splide
              ref={mainRef}
              onMoved={(e) => console.log(mainRef)}
              aria-label="My Favorite Image"
              options={{
                rewind: false,
                type: "loop",
                gap: "17rem",
                wheel: true,
                perPage: 5,
                perMove: 1,
                direction: "ttb",
                heightRatio:4,
                autoplay: true,
                breakpoints: {
                  1200: { perPage: 1,heightRatio:1.2},
                },
              }}
            >
              {classroomsPackages.map((image: string, index) => (
                <SplideSlide key={nanoid(5)}>
                  <div
                    className={`border p-3 ${
                      currentIndex === index ? "border-4 border-red-500" : ""
                    } `}
                  >
                    <button onClick={() => handleThumbs(index)}>
                      <img
                        src={image}
                        width={"100%"}
                        height={"100%"}
                        alt="robotics_classroom_gadgets"
                      />
                    </button>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="flex flex-col md:flex-row  gap-12 basis-full md:basis-9/12">
            <div className="basis-full md:basis-5/12 ">
              <div className="rounded-lg border overflow-hidden p-3">
                <img
                  src={classroomsPackages[currentIndex]}
                  alt="product thumbnail"
                  width={"100%"}
                  height={"100%"}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="basis-full md:basis-7/12">
              <Stack direction="flex-col" gap="gap-6" styles="w-full">
                <div className="flex justify-between items-center w-full">
                  <Heading type={2} title="Robotics Classroom Bundle" />
                  <ProductRating ratings={{ rating: 0.0, total_reviews: 0 }} />
                </div>
                <Body title="Avishkaar's Flagship Robotics Solution for Schools" />
                <CustomButton
                  title="Request a call"
                  styles="font-bold shadow-lg"
                />
                <ul className="list-disc pl-6 text-slate-500 flex flex-col gap-6 font-semibold">
                  <li>
                    Includes over 400 parts, allowing young innovators to make
                    over 500 robots
                  </li>
                  <li>
                    Code your robots using block-based coding software or
                    control them using physical remote control and app
                  </li>
                  <li>
                    1 Robotics company in India - used by over 200,000+ kids in
                    1500+ schools across 15+ countries,
                  </li>
                  <li>
                    Students get a chance to participate annually in Avishkaar
                    League - Asia&apos;s Biggest Innovation Competition and win
                    prizes worth Rs.5 lacs
                  </li>
                  <li>STEM.org certified kits and curriculums</li>
                </ul>
              </Stack>
            </div>
          </div>
        </div>
      </Container>

      <Contacts />
    </>
  );
};

export default RoboticsClassroomPage;
