"use client";
"use client";
import { Body, Container, HeroWall } from "@/components/ui";
import { IProductCard } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPauseFill } from "react-icons/bs";

export const ProductHero = ({
  product,
  loading,
}: {
  product: IProductCard;
  loading: Boolean;
}) => {
  const router = useRouter();
  return (
    <HeroWall
      color={"bg-orange-500"}
      gradient={"from-orange-500/80 to-red-600"}
    >
      <Container styles="h-full relative pt-48 pb-20 md:pb-32">
        {loading ? (
          <div role="status" className="animate-pulse flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <div className="h-6 bg-white rounded-md  w-[80%] mb-4"></div>
              <div className="h-6 bg-white rounded-md  w-[40%] mb-2.5"></div>
              <div className="h-4 bg-white rounded-md  w-[20%]"></div>{" "}
            </div>
            <div className="flex gap-x-8 items-center">
              <div className="h-6 bg-white rounded-md  w-[15%]"></div>
              <div className="h-6 bg-white rounded-md  w-[20%]"></div>
            </div>
          </div>
        ) : (
          <div className="content">
            <h1 className=" text-5xl md:text-6xl xl:text-7xl leading-tight  font-extrabold text-white">
              {product?.name}
            </h1>
            <div className="flex gap-3 items-center leading-none mt-4">
              <h4 className=" text-2xl md:text-4xl leading-tight  font-extrabold text-white">
                &#8358;{`${product?.price?.curr.toLocaleString("en")} /-`}
              </h4>

              <h4 className=" text-lg text-white relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-white ">
                &#8358;{`${product?.price?.prev.toLocaleString("en")} /-`}
              </h4>

              <Body
                title={`${product?.price?.discount}% off`}
                type={1}
                styles="text-white"
              />
            </div>
            <div className="flex items-center justify-start mt-8 gap-x-1 ">
              <AiFillStar className="text-yellow-300" size={24} />
              <h3 className="text-white">{`${product?.ratings.rating} (${product?.ratings.total_reviews})`}</h3>
            </div>
            <div className="flex gap-8 items-center text-white mt-16 font-bold text-xl">
              <Link onClick={() => router.back()} href={"#"}>
                {"Back"}
              </Link>
              <BsPauseFill size={18} className="text-yellow-300" />
              <Body title={product?.name} />
            </div>
          </div>
        )}
      </Container>
    </HeroWall>
  );
};
