"use client"

import { Heading, ProductCarousel, Stack } from "@/components/ui";
import React from "react";
import { most_loved } from "../../../../static";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
export const Educational = () => {
  return (
    <section className="education">
      {/* <Splide
        aria-label="My Favorite Images"
        extensions={{ Video }}
        options={{
          cover: true,
          video: { loop: true,host:'https://images.avishkaar.cc',playerOptions:{htmlVideo:{controls:true,muted:true,autoplay:true}} },
        }}
      >
       
        <SplideSlide >
        <li className="splide__slide" data-splide-html-video="https://images.avishkaar.cc/products/Avishkaar_MEX_Macaw/Main_Carousel/macaw-product-video.mp4">
        <img src="/images/hero-img2.jpg" className="h-96 w-full" />
      </li>        </SplideSlide>
      </Splide> */}
      <Stack direction="flex-col" gap="gap-8">
        <Heading type={2} title="Educational Kits (Perfect for Gifting)" />
        <ProductCarousel products={most_loved} />
      </Stack>
    </section>
  );
};
