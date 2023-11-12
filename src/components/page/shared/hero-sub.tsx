"use client";
"use client";
import { Body, Container, HeroWall } from "@/components/ui";
import { IHeroSub } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsPauseFill } from "react-icons/bs";

export const HeroSub = ({ page, color, gradient, type = "home" }: IHeroSub) => {
  const router = useRouter();
  return (
    <HeroWall color={color} gradient={gradient}>
      <Container styles="h-full relative pt-48 pb-20 md:pb-32">
        <div className="content text-center">
          <h1 className=" text-5xl md:text-6xl xl:text-7xl leading-tight  font-extrabold text-white">
            {page}
          </h1>

          <div className="flex gap-8 items-center justify-center text-white mt-8 font-bold text-xl">
            <Link
              onClick={() => (type === "shop" ? router.back() : false)}
              href={type === "home" ? "/" : "#"}
            >
              {type === "home" ? "Home" : "Shop"}
            </Link>
            <BsPauseFill size={18} className="text-yellow-300" />
            <Body title={page} />
          </div>
        </div>
      </Container>
    </HeroWall>
  );
};
