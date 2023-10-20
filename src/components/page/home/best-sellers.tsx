"use client";

import { Body, Container, CustomButton, Heading } from "../../ui";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
export const BestSellers = () => {
  return (
    <Container styles="py-12 md:py-24">
      <Heading styles="text-center mb-16" title="Our Best Sellers" />
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: false,
          type:'loop',
          gap: "1rem",
          perPage: 4,
          perMove: 1,
          breakpoints: { 800: { perPage: 1 },1200:{perPage:2}, 1500:{perPage:3} },
        }}
      >
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
        <SplideSlide>
          <div className="card relative border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 ">
            <img
              src="/images/mrsk-thumbnail.webp"
              alt="mrsk"
              className="h-72 w-full object-cover"
            />

            <div className="absolute top-0 right-0 h-14 w-16 bg-gradient-to-tr from-orange-500 to-orange-600 flex items-center justify-center">
              <Heading type={3} title="$99" styles="text-white" />
            </div>
            <div className="p-6">
              <Heading
                type={4}
                title="MEX Robotics & AI"
                styles="text-orange-500"
              />
              <Body
                styles="my-3"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <CustomButton
                title="Enroll Now"
                styles="w-full font-bold shadow-lg"
              />
            </div>
          </div>
          ;
        </SplideSlide>
      </Splide>
    </Container>
  );
};
