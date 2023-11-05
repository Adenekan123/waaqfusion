"use client";

import { Body, Container, CustomButton, Heading, ProductCard } from "../../ui";
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
          type: "loop",
          gap: "1rem",
          padding: {right:'4rem'},
          perPage: 4,
          perMove: 1,
          breakpoints: {
            800: { perPage: 1 },
            1200: { perPage: 2 },
            1500: { perPage: 3 },
          },
        }}
      >
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
        <SplideSlide>
          <ProductCard
            name="MEX Robotics & AI"
            tag="Robotics"
            price={{ curr: 2499, prev: 3499, discount: 28 }}
            image="/images/mrsk-thumbnail.webp"
            ratings={{ rating: 5, total_reviews: 238 }}
            age_range="8+ Ages"
          />
        </SplideSlide>
      
      </Splide>
    </Container>
  );
};
