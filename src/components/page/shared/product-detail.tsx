"use client";
import {
  Body,
  Container,
  CustomButton,
  Heading,
  ProductPrice,
  ProductRating,
  Stack,
} from "@/components/ui";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useRef, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useFetch } from "@/hooks";
import { ProductHero } from "./product-hero";

export const ProductDetail = ({ productid }: { productid?: string }) => {
  const { data, isLoading } = useFetch(`/api/products/${productid}`);

  const [images, setImages] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (data && data.images) setImages(data.images);
  }, [data]);

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
      <ProductHero product={data} loading={isLoading} />
      <Container styles="py-12 md:py-24">
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="basis-full md:basis-2/12 order-last md:order-first">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="flex flex-col gap-8 md:w-48">
                  {Array.from(Array(4)).map((_) => (
                    <div
                      key={nanoid(5)}
                      className="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700"
                    >
                      <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Splide
                ref={mainRef}
                aria-label="My Favorite Image"
                options={{
                  rewind: false,
                  type: "loop",
                  gap: "17rem",
                  wheel: true,
                  perPage: 5,
                  perMove: 1,
                  direction: "ttb",
                  heightRatio: 4,
                  autoplay: true,
                  breakpoints: {
                    1200: { perPage: 1, heightRatio: 1.2 },
                  },
                }}
              >
                {images.length &&
                  images.map((image, index: number) => (
                    <SplideSlide key={`image-${index}`}>
                      <div
                        className={`border p-3 ${
                          currentIndex === index
                            ? "border-4 border-red-500"
                            : ""
                        } `}
                      >
                        <button onClick={() => handleThumbs(index)}>
                          <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${image}`}
                            width={"100%"}
                            height={"100%"}
                            alt="robotics_classroom_gadgets"
                          />
                        </button>
                      </div>
                    </SplideSlide>
                  ))}
              </Splide>
            )}
          </div>
          <div className="flex flex-col md:flex-row  gap-12 basis-full md:basis-9/12">
            <div className="basis-full md:basis-5/12 ">
              <div className="rounded-lg border overflow-hidden p-3">
                {isLoading && !data ? (
                  <div role="status" className="animate-pulse">
                    <div className="flex items-center justify-center w-full h-56 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${data.images[currentIndex]}`}
                    alt="product thumbnail"
                    width={"100%"}
                    height={"100%"}
                    className="rounded-lg"
                  />
                )}
              </div>
            </div>
            <div className="basis-full md:basis-7/12">
              <Stack direction="flex-col" gap="gap-6" styles="w-full">
                <div className="flex justify-between items-center w-full">
                  {isLoading ? (
                    <div role="status" className="animate-pulse w-full h-full">
                      <div className="flex justify-between items-center">
                        <div className="h-6 bg-slate-700 rounded-md  w-[60%] mb-4"></div>
                        <div className="h-6 bg-slate-700 rounded-md  w-[15%] mb-4"></div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Heading type={2} title={data?.name} />
                      {data?.ratings ? (
                        <ProductRating ratings={data?.ratings} />
                      ) : null}
                    </>
                  )}
                </div>

                {isLoading && !data ? (
                  <div role="status" className="animate-pulse h-full">
                    <div className="flex flex-col gap-8">
                      <div className="h-6 bg-slate-700 rounded-md  w-[20%]"></div>
                      <div className="h-6 bg-slate-700 rounded-md  w-[60%]"></div>
                      <div className="h-12 bg-slate-700 rounded-3xl  w-[100%]"></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Body title="Avishkaar's Flagship Robotics Solution for Schools" />
                    <CustomButton
                      title="Buy Now"
                      styles="font-bold shadow-lg"
                    />{" "}
                  </>
                )}

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
      </Container>{" "}
    </>
  );
};
