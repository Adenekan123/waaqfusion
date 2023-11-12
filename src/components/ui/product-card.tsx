import { IProductCard } from "@/types";
import React from "react";
import { Heading } from "./heading";
import { Body } from "./body";
import { CustomButton } from "./custom-button";
import { ProductRating } from "./product-rating";
import Link from "next/link";

export const ProductCard = ({
  id,
  image,
  name,
  tag,
  price,
  ratings,
}: IProductCard) => {
  const { curr, prev, discount } = price;
  return (
    <div className="card relative  border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 h-full">
      <Link href={`/product/${id}`}>
        <img
          src={"/api/image?url=" + image.split("+")[0]}
          alt="mrsk"
          className="h-72 w-full object-cover"
        />
      </Link>
      <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-3xl border border-orange-500 text-orange-500">
        {tag}
      </div>
      <div className="flex flex-col gap-4 p-6 card-body h-56 justify-between  border">
        <div className="flex justify-between items-center gap-3">
          <Heading type={4} title={name} styles="text-orange-500" />
          <div className="basis-5/12 mb-auto relative top-1">
            <ProductRating ratings={ratings} />
          </div>
        </div>

        <div className="flex gap-3 items-center leading-none">
          <Body
            type={1}
            title={`&#8358;${curr.toLocaleString("en")} /-`}
            styles="font-bold"
            hasEntity
          />
          <Body
            title={`&#8358;${prev.toLocaleString("en")} /`}
            type={0.5}
            hasEntity
            styles="text-slate-700 relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-slate-700 "
          />
          <Body title={`${discount}% off`} type={0.5} styles="text-red-500" />
        </div>
        <CustomButton title="Enroll Now" styles="w-full font-bold shadow-lg" />
      </div>
    </div>
  );
};
